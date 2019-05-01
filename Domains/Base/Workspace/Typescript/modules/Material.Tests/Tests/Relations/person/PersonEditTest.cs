
namespace Tests.Relations
{
    using System.Linq;
    using Allors.Domain;
    using Angular;
    using Xunit;
    using src.allors.material.custom.relations.people;
    using src.allors.material.custom.relations.people.person;

    [Collection("Test collection")]
    public class PersonEditTest : Test
    {
        private readonly PeopleComponent people;

        public PersonEditTest(TestFixture fixture)
            : base(fixture)
        {
            this.Login();
            this.people = this.Sidenav.NavigateToPeople();
        }

        [Fact]
        public void Title()
        {
            this.people.AddNew.Click();
            Assert.Equal("Person", this.Driver.Title);
        }

        [Fact]
        public void Add()
        {
            this.people.AddNew.Click();
            var before = new People(this.Session).Extent().ToArray();

            var personEditPage = new PersonComponent(this.Driver);

            personEditPage.FirstName.Set("Jos")
                          .LastName.Set("Smos")
                          .SAVE.Click();

            this.Driver.WaitForAngular();
            this.Session.Rollback();

            var after = new People(this.Session).Extent().ToArray();

            Assert.Equal(after.Length, before.Length + 1);

            var person = after.Except(before).First();

            Assert.Equal("Jos", person.FirstName);
            Assert.Equal("Smos", person.LastName);
        }

        [Fact]
        public void Edit()
        {
            var before = new People(this.Session).Extent().ToArray();
            var person = before.First(v => v.FullName == "John Doe");

            var page = this.people.Select(person).EditAndNavigate();

            page.FirstName.Set("Jos")
                .LastName.Set("Smos")
                .SAVE.Click();

            this.Driver.WaitForAngular();
            this.Session.Rollback();

            var after = new People(this.Session).Extent().ToArray();

            Assert.Equal(after.Length, before.Length);

            Assert.Equal("Jos", person.FirstName);
            Assert.Equal("Smos", person.LastName);
        }
    }
}
