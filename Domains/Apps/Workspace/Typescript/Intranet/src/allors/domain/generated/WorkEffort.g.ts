// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { UniquelyIdentifiable } from './UniquelyIdentifiable.g';
import { Deletable } from './Deletable.g';
import { Auditable } from './Auditable.g';
import { WorkEffortState } from './WorkEffortState.g';
import { Person } from './Person.g';
import { Priority } from './Priority.g';
import { WorkEffortPurpose } from './WorkEffortPurpose.g';
import { Facility } from './Facility.g';
import { Deliverable } from './Deliverable.g';
import { WorkEffortInventoryAssignment } from './WorkEffortInventoryAssignment.g';
import { WorkEffortType } from './WorkEffortType.g';
import { InventoryItem } from './InventoryItem.g';
import { Requirement } from './Requirement.g';
import { User } from './User.g';
import { QuoteItemVersion } from './QuoteItemVersion.g';
import { QuoteItem } from './QuoteItem.g';
import { WorkEffortAssignment } from './WorkEffortAssignment.g';
import { CommunicationEventVersion } from './CommunicationEventVersion.g';
import { CommunicationEvent } from './CommunicationEvent.g';
import { WorkEffortVersion } from './WorkEffortVersion.g';

export interface WorkEffort extends SessionObject , UniquelyIdentifiable, Deletable, Auditable {
        WorkEffortState : WorkEffortState;


        Owner : Person;


        Name : string;


        Description : string;


        Priority : Priority;


        WorkEffortPurposes : WorkEffortPurpose[];
        AddWorkEffortPurpose(value: WorkEffortPurpose);
        RemoveWorkEffortPurpose(value: WorkEffortPurpose);


        ActualCompletion : Date;


        ScheduledStart : Date;


        ScheduledCompletion : Date;


        ActualHours : number;


        EstimatedHours : number;


        Precendencies : WorkEffort[];
        AddPrecendency(value: WorkEffort);
        RemovePrecendency(value: WorkEffort);


        Facility : Facility;


        DeliverablesProduced : Deliverable[];
        AddDeliverablesProduced(value: Deliverable);
        RemoveDeliverablesProduced(value: Deliverable);


        ActualStart : Date;


        InventoryItemsNeeded : WorkEffortInventoryAssignment[];
        AddInventoryItemsNeeded(value: WorkEffortInventoryAssignment);
        RemoveInventoryItemsNeeded(value: WorkEffortInventoryAssignment);


        Children : WorkEffort[];
        AddChild(value: WorkEffort);
        RemoveChild(value: WorkEffort);


        WorkEffortType : WorkEffortType;


        InventoryItemsProduced : InventoryItem[];
        AddInventoryItemsProduced(value: InventoryItem);
        RemoveInventoryItemsProduced(value: InventoryItem);


        RequirementFulfillments : Requirement[];
        AddRequirementFulfillment(value: Requirement);
        RemoveRequirementFulfillment(value: Requirement);


        SpecialTerms : string;


        Concurrencies : WorkEffort[];
        AddConcurrency(value: WorkEffort);
        RemoveConcurrency(value: WorkEffort);


    CanExecuteConfirm: boolean;
    Confirm: Method;

    CanExecuteFinish: boolean;
    Finish: Method;

    CanExecuteCancel: boolean;
    Cancel: Method;

    CanExecuteReopen: boolean;
    Reopen: Method;

    CanExecuteDelete: boolean;
    Delete: Method;

}