//------------------------------------------------------------------------------------------------- 
// <copyright file="WorkTaskTests.cs" company="Allors bvba">
// Copyright 2002-2009 Allors bvba.
// 
// Dual Licensed under
//   a) the General Public Licence v3 (GPL)
//   b) the Allors License
// 
// The GPL License is included in the file gpl.txt.
// The Allors License is an addendum to your contract.
// 
// Allors Platform is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// For more information visit http://www.allors.com/legal
// </copyright>
// <summary>Defines the MediaTests type.</summary>
//-------------------------------------------------------------------------------------------------

namespace Allors.Domain
{
    using Should;
    using System;
    using System.Linq;
    using Xunit;

    using Allors.Meta;
    
    public class WorkTaskTests : DomainTest
    {
        [Fact]
        public void GivenWorkTask_WhenBuild_ThenLastObjectStateEqualsCurrencObjectState()
        {
            var workEffort = new WorkTaskBuilder(this.Session).WithName("Activity").Build();

            this.Session.Derive();

            Assert.Equal(new WorkEffortStates(this.Session).NeedsAction, workEffort.WorkEffortState);
            Assert.Equal(workEffort.LastWorkEffortState, workEffort.WorkEffortState);
        }

        [Fact]
        public void GivenWorkTask_WhenBuild_ThenPreviousObjectStateIsNull()
        {
            var workEffort = new WorkTaskBuilder(this.Session).WithName("Activity").Build();

            this.Session.Derive();

            Assert.Null(workEffort.PreviousWorkEffortState);
        }

        [Fact]
        public void GivenWorkTask_WhenBuildingWithTakenBy_ThenWorkEffortNumberAssigned()
        {
            // Arrange
            var organisation1 = new OrganisationBuilder(this.Session).WithName("Org1").WithIsInternalOrganisation(true).Build();
            var organisation2 = new OrganisationBuilder(this.Session).WithName("Org2").WithIsInternalOrganisation(true).Build();
            var workOrder = new WorkTaskBuilder(this.Session).WithName("Task").Build();

            // Act
            var derivation = this.Session.Derive(false);

            // Assert
            derivation.HasErrors.ShouldBeTrue();
            derivation.Errors.SelectMany(e => e.RoleTypes).ShouldContain(M.WorkTask.WorkEffortNumber);

            //// Re-arrange
            workOrder.TakenBy = organisation2;

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.WorkEffortNumber.ShouldNotBeNull();
        }

        [Fact]
        public void GivenWorkEffortAndTimeEntries_WhenDeriving_ThenActualHoursDerived()
        {
            // Arrange
            var frequencies = new TimeFrequencies(this.Session);

            var workOrder = new WorkTaskBuilder(this.Session).WithName("Task").Build();
            var employee = new PersonBuilder(this.Session).WithFirstName("Good").WithLastName("Worker").Build();
            var employment = new EmploymentBuilder(this.Session).WithEmployee(employee).Build();

            this.Session.Derive(true);

            var yesterday = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(-1));
            var laterYesterday = DateTimeFactory.CreateDateTime(yesterday.AddHours(3));

            var today = DateTimeFactory.CreateDateTime(this.Session.Now());
            var laterToday = DateTimeFactory.CreateDateTime(today.AddHours(4));

            var tomorrow = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(1));
            var laterTomorrow = DateTimeFactory.CreateDateTime(tomorrow.AddHours(6));

            var timeEntry1 = new TimeEntryBuilder(this.Session)
                .WithFromDate(yesterday)
                .WithThroughDate(laterYesterday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            var timeEntry2 = new TimeEntryBuilder(this.Session)
                .WithFromDate(today)
                .WithThroughDate(laterToday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            var timeEntry3 = new TimeEntryBuilder(this.Session)
                .WithFromDate(tomorrow)
                .WithThroughDate(laterTomorrow)
                .WithTimeFrequency(frequencies.Minute)
                .WithWorkEffort(workOrder)
                .Build();

            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntry1);
            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntry2);
            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntry3);

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.ActualHours.ShouldEqual(13.0M);
        }

        [Fact]
        public void GivenWorkEffortAndTimeEntries_WhenDeriving_ThenActualStartAndCompletionDerived()
        {
            // Arrange
            var frequencies = new TimeFrequencies(this.Session);

            var workOrder = new WorkTaskBuilder(this.Session).WithName("Task").Build();
            var employee = new PersonBuilder(this.Session).WithFirstName("Good").WithLastName("Worker").Build();
            var employment = new EmploymentBuilder(this.Session).WithEmployee(employee).Build();

            this.Session.Derive(true);

            var yesterday = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(-1));
            var laterYesterday = DateTimeFactory.CreateDateTime(yesterday.AddHours(3));

            var today = DateTimeFactory.CreateDateTime(this.Session.Now());
            var laterToday = DateTimeFactory.CreateDateTime(today.AddHours(4));

            var tomorrow = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(1));
            var laterTomorrow = DateTimeFactory.CreateDateTime(tomorrow.AddHours(6));

            var timeEntryToday = new TimeEntryBuilder(this.Session)
                .WithFromDate(today)
                .WithThroughDate(laterToday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryToday);

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.ActualStart.ShouldEqual(today);
            workOrder.ActualCompletion.ShouldEqual(laterToday);

            //// Re-arrange
            var timeEntryYesterday = new TimeEntryBuilder(this.Session)
                .WithFromDate(yesterday)
                .WithThroughDate(laterYesterday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryYesterday);

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.ActualStart.ShouldEqual(yesterday);
            workOrder.ActualCompletion.ShouldEqual(laterToday);

            //// Re-arrange

            var timeEntryTomorrow = new TimeEntryBuilder(this.Session)
                .WithFromDate(tomorrow)
                .WithThroughDate(laterTomorrow)
                .WithTimeFrequency(frequencies.Minute)
                .WithWorkEffort(workOrder)
                .Build();

            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryTomorrow);

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.ActualStart.ShouldEqual(yesterday);
            workOrder.ActualCompletion.ShouldEqual(laterTomorrow);
        }

        [Fact]
        public void GivenWorkEffort_WhenDeriving_ThenPrintDocumentRendered()
        {
            // Arrange
            var frequencies = new TimeFrequencies(this.Session);

            var workOrder = new WorkTaskBuilder(this.Session).WithName("Task").Build();
            var employee = new PersonBuilder(this.Session).WithFirstName("Good").WithLastName("Worker").Build();
            var employment = new EmploymentBuilder(this.Session).WithEmployee(employee).Build();
            var part1 = new PartBuilder(this.Session).WithPartId("P1").Build();
            var part2 = new PartBuilder(this.Session).WithPartId("P2").Build();
            var part3 = new PartBuilder(this.Session).WithPartId("P3").Build();

            this.Session.Derive(true);

            var inventoryAssignment1 = new WorkEffortInventoryAssignmentBuilder(this.Session)
                .WithAssignment(workOrder)
                .WithPart(part1)
                .WithQuantity(11)
                .Build();

            var inventoryAssignment2 = new WorkEffortInventoryAssignmentBuilder(this.Session)
                .WithAssignment(workOrder)
                .WithPart(part2)
                .WithQuantity(12)
                .Build();

            var inventoryAssignment3 = new WorkEffortInventoryAssignmentBuilder(this.Session)
                .WithAssignment(workOrder)
                .WithPart(part3)
                .WithQuantity(13)
                .Build();

            var yesterday = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(-1));
            var laterYesterday = DateTimeFactory.CreateDateTime(yesterday.AddHours(3));

            var today = DateTimeFactory.CreateDateTime(this.Session.Now());
            var laterToday = DateTimeFactory.CreateDateTime(today.AddHours(4));

            var tomorrow = DateTimeFactory.CreateDateTime(this.Session.Now().AddDays(1));
            var laterTomorrow = DateTimeFactory.CreateDateTime(tomorrow.AddHours(6));

            var timeEntryYesterday = new TimeEntryBuilder(this.Session)
                .WithFromDate(yesterday)
                .WithThroughDate(laterYesterday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            var timeEntryToday = new TimeEntryBuilder(this.Session)
                .WithFromDate(today)
                .WithThroughDate(laterToday)
                .WithTimeFrequency(frequencies.Hour)
                .WithWorkEffort(workOrder)
                .Build();

            var timeEntryTomorrow = new TimeEntryBuilder(this.Session)
                .WithFromDate(tomorrow)
                .WithThroughDate(laterTomorrow)
                .WithTimeFrequency(frequencies.Minute)
                .WithWorkEffort(workOrder)
                .Build();

            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryYesterday);
            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryToday);
            employee.TimeSheetWhereWorker.AddTimeEntry(timeEntryTomorrow);

            // Act
            this.Session.Derive(true);

            // Assert
            workOrder.PrintDocument.ShouldNotBeNull();
            //var result = workOrder.PrintDocument;

            //var desktopDir = Environment.GetFolderPath(Environment.SpecialFolder.Desktop);
            //var outputFile = System.IO.File.Create(System.IO.Path.Combine(desktopDir, "generated.odt"));
            //var stream = new System.IO.MemoryStream(result.MediaContent.Data);

            //stream.CopyTo(outputFile);
            //stream.Close();
        }
    }
}