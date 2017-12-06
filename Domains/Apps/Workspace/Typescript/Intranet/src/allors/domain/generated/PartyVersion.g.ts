// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
import { SessionObject, Method } from "../../framework";

import { Version } from './Version.g';
import { User } from './User.g';
import { PostalAddress } from './PostalAddress.g';
import { TelecommunicationsNumber } from './TelecommunicationsNumber.g';
import { Qualification } from './Qualification.g';
import { ContactMechanism } from './ContactMechanism.g';
import { OrganisationContactRelationship } from './OrganisationContactRelationship.g';
import { Person } from './Person.g';
import { PartyContactMechanism } from './PartyContactMechanism.g';
import { BillingAccount } from './BillingAccount.g';
import { PartySkill } from './PartySkill.g';
import { PartyClassification } from './PartyClassification.g';
import { BankAccount } from './BankAccount.g';
import { ElectronicAddress } from './ElectronicAddress.g';
import { ShipmentMethod } from './ShipmentMethod.g';
import { Resume } from './Resume.g';
import { Media } from './Media.g';
import { CreditCard } from './CreditCard.g';
import { PaymentMethod } from './PaymentMethod.g';
import { Currency } from './Currency.g';
import { VatRegime } from './VatRegime.g';
import { DunningType } from './DunningType.g';

export interface PartyVersion extends SessionObject , Version {
        Comment : string;


        CreatedBy : User;


        LastModifiedBy : User;


        CreationDate : Date;


        LastModifiedDate : Date;


        PartyName : string;


        GeneralCorrespondence : PostalAddress;


        YTDRevenue : number;


        LastYearsRevenue : number;


        BillingInquiriesFax : TelecommunicationsNumber;


        Qualifications : Qualification[];
        AddQualification(value: Qualification);
        RemoveQualification(value: Qualification);


        HomeAddress : ContactMechanism;


        InactiveOrganisationContactRelationships : OrganisationContactRelationship[];


        SalesOffice : ContactMechanism;


        InactiveContacts : Person[];


        InactivePartyContactMechanisms : PartyContactMechanism[];


        OrderInquiriesFax : TelecommunicationsNumber;


        CurrentSalesReps : Person[];


        PartyContactMechanisms : PartyContactMechanism[];
        AddPartyContactMechanism(value: PartyContactMechanism);
        RemovePartyContactMechanism(value: PartyContactMechanism);


        ShippingInquiriesFax : TelecommunicationsNumber;


        ShippingInquiriesPhone : TelecommunicationsNumber;


        BillingAccounts : BillingAccount[];
        AddBillingAccount(value: BillingAccount);
        RemoveBillingAccount(value: BillingAccount);


        OrderInquiriesPhone : TelecommunicationsNumber;


        PartySkills : PartySkill[];
        AddPartySkill(value: PartySkill);
        RemovePartySkill(value: PartySkill);


        PartyClassifications : PartyClassification[];


        ExcludeFromDunning : boolean;


        BankAccounts : BankAccount[];
        AddBankAccount(value: BankAccount);
        RemoveBankAccount(value: BankAccount);


        CurrentContacts : Person[];


        BillingAddress : ContactMechanism;


        GeneralEmail : ElectronicAddress;


        DefaultShipmentMethod : ShipmentMethod;


        Resumes : Resume[];
        AddResume(value: Resume);
        RemoveResume(value: Resume);


        HeadQuarter : ContactMechanism;


        PersonalEmailAddress : ElectronicAddress;


        CellPhoneNumber : TelecommunicationsNumber;


        BillingInquiriesPhone : TelecommunicationsNumber;


        OrderAddress : ContactMechanism;


        InternetAddress : ElectronicAddress;


        Contents : Media[];
        AddContent(value: Media);
        RemoveContent(value: Media);


        CreditCards : CreditCard[];
        AddCreditCard(value: CreditCard);
        RemoveCreditCard(value: CreditCard);


        ShippingAddress : PostalAddress;


        CurrentOrganisationContactRelationships : OrganisationContactRelationship[];


        OpenOrderAmount : number;


        GeneralFaxNumber : TelecommunicationsNumber;


        DefaultPaymentMethod : PaymentMethod;


        CurrentPartyContactMechanisms : PartyContactMechanism[];


        GeneralPhoneNumber : TelecommunicationsNumber;


        PreferredCurrency : Currency;


        VatRegime : VatRegime;


        AmountOverDue : number;


        DunningType : DunningType;


        AmountDue : number;


        LastReminderDate : Date;


        CreditLimit : number;


        SubAccountNumber : number;


        BlockedForDunning : Date;


}