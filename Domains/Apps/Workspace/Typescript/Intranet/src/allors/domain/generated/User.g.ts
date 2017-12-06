// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Localised } from './Localised.g';
import { TaskList } from './TaskList.g';
import { NotificationList } from './NotificationList.g';
import { Locale } from './Locale.g';
import { Singleton } from './Singleton.g';
import { TaskAssignment } from './TaskAssignment.g';
import { Auditable } from './Auditable.g';
import { CommunicationEventVersion } from './CommunicationEventVersion.g';
import { InvoiceVersion } from './InvoiceVersion.g';
import { OrderVersion } from './OrderVersion.g';
import { PartyVersion } from './PartyVersion.g';

export interface User extends SessionObject , Localised {
        UserName : string;


        NormalizedUserName : string;


        UserEmail : string;


        UserEmailConfirmed : boolean;


        TaskList : TaskList;


        NotificationList : NotificationList;


}