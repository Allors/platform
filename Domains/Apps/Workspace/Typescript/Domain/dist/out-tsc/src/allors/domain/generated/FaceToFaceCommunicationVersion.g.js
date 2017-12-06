"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Allors generated file.
// Do not edit this file, changes will be overwritten.
/* tslint:disable */
const framework_1 = require("../../framework");
class FaceToFaceCommunicationVersion extends framework_1.SessionObject {
    get CanReadParticipants() {
        return this.canRead('Participants');
    }
    get CanWriteParticipants() {
        return this.canWrite('Participants');
    }
    get Participants() {
        return this.get('Participants');
    }
    AddParticipant(value) {
        return this.add('Participants', value);
    }
    RemoveParticipant(value) {
        return this.remove('Participants', value);
    }
    set Participants(value) {
        this.set('Participants', value);
    }
    get CanReadLocation() {
        return this.canRead('Location');
    }
    get CanWriteLocation() {
        return this.canWrite('Location');
    }
    get Location() {
        return this.get('Location');
    }
    set Location(value) {
        this.set('Location', value);
    }
    get CanReadCommunicationEventState() {
        return this.canRead('CommunicationEventState');
    }
    get CommunicationEventState() {
        return this.get('CommunicationEventState');
    }
    get CanReadComment() {
        return this.canRead('Comment');
    }
    get CanWriteComment() {
        return this.canWrite('Comment');
    }
    get Comment() {
        return this.get('Comment');
    }
    set Comment(value) {
        this.set('Comment', value);
    }
    get CanReadCreatedBy() {
        return this.canRead('CreatedBy');
    }
    get CanWriteCreatedBy() {
        return this.canWrite('CreatedBy');
    }
    get CreatedBy() {
        return this.get('CreatedBy');
    }
    set CreatedBy(value) {
        this.set('CreatedBy', value);
    }
    get CanReadLastModifiedBy() {
        return this.canRead('LastModifiedBy');
    }
    get CanWriteLastModifiedBy() {
        return this.canWrite('LastModifiedBy');
    }
    get LastModifiedBy() {
        return this.get('LastModifiedBy');
    }
    set LastModifiedBy(value) {
        this.set('LastModifiedBy', value);
    }
    get CanReadCreationDate() {
        return this.canRead('CreationDate');
    }
    get CanWriteCreationDate() {
        return this.canWrite('CreationDate');
    }
    get CreationDate() {
        return this.get('CreationDate');
    }
    set CreationDate(value) {
        this.set('CreationDate', value);
    }
    get CanReadLastModifiedDate() {
        return this.canRead('LastModifiedDate');
    }
    get CanWriteLastModifiedDate() {
        return this.canWrite('LastModifiedDate');
    }
    get LastModifiedDate() {
        return this.get('LastModifiedDate');
    }
    set LastModifiedDate(value) {
        this.set('LastModifiedDate', value);
    }
    get CanReadScheduledStart() {
        return this.canRead('ScheduledStart');
    }
    get CanWriteScheduledStart() {
        return this.canWrite('ScheduledStart');
    }
    get ScheduledStart() {
        return this.get('ScheduledStart');
    }
    set ScheduledStart(value) {
        this.set('ScheduledStart', value);
    }
    get CanReadToParties() {
        return this.canRead('ToParties');
    }
    get ToParties() {
        return this.get('ToParties');
    }
    get CanReadContactMechanisms() {
        return this.canRead('ContactMechanisms');
    }
    get CanWriteContactMechanisms() {
        return this.canWrite('ContactMechanisms');
    }
    get ContactMechanisms() {
        return this.get('ContactMechanisms');
    }
    AddContactMechanism(value) {
        return this.add('ContactMechanisms', value);
    }
    RemoveContactMechanism(value) {
        return this.remove('ContactMechanisms', value);
    }
    set ContactMechanisms(value) {
        this.set('ContactMechanisms', value);
    }
    get CanReadInvolvedParties() {
        return this.canRead('InvolvedParties');
    }
    get InvolvedParties() {
        return this.get('InvolvedParties');
    }
    get CanReadInitialScheduledStart() {
        return this.canRead('InitialScheduledStart');
    }
    get CanWriteInitialScheduledStart() {
        return this.canWrite('InitialScheduledStart');
    }
    get InitialScheduledStart() {
        return this.get('InitialScheduledStart');
    }
    set InitialScheduledStart(value) {
        this.set('InitialScheduledStart', value);
    }
    get CanReadEventPurposes() {
        return this.canRead('EventPurposes');
    }
    get CanWriteEventPurposes() {
        return this.canWrite('EventPurposes');
    }
    get EventPurposes() {
        return this.get('EventPurposes');
    }
    AddEventPurpose(value) {
        return this.add('EventPurposes', value);
    }
    RemoveEventPurpose(value) {
        return this.remove('EventPurposes', value);
    }
    set EventPurposes(value) {
        this.set('EventPurposes', value);
    }
    get CanReadScheduledEnd() {
        return this.canRead('ScheduledEnd');
    }
    get CanWriteScheduledEnd() {
        return this.canWrite('ScheduledEnd');
    }
    get ScheduledEnd() {
        return this.get('ScheduledEnd');
    }
    set ScheduledEnd(value) {
        this.set('ScheduledEnd', value);
    }
    get CanReadActualEnd() {
        return this.canRead('ActualEnd');
    }
    get CanWriteActualEnd() {
        return this.canWrite('ActualEnd');
    }
    get ActualEnd() {
        return this.get('ActualEnd');
    }
    set ActualEnd(value) {
        this.set('ActualEnd', value);
    }
    get CanReadWorkEfforts() {
        return this.canRead('WorkEfforts');
    }
    get CanWriteWorkEfforts() {
        return this.canWrite('WorkEfforts');
    }
    get WorkEfforts() {
        return this.get('WorkEfforts');
    }
    AddWorkEffort(value) {
        return this.add('WorkEfforts', value);
    }
    RemoveWorkEffort(value) {
        return this.remove('WorkEfforts', value);
    }
    set WorkEfforts(value) {
        this.set('WorkEfforts', value);
    }
    get CanReadDescription() {
        return this.canRead('Description');
    }
    get CanWriteDescription() {
        return this.canWrite('Description');
    }
    get Description() {
        return this.get('Description');
    }
    set Description(value) {
        this.set('Description', value);
    }
    get CanReadInitialScheduledEnd() {
        return this.canRead('InitialScheduledEnd');
    }
    get CanWriteInitialScheduledEnd() {
        return this.canWrite('InitialScheduledEnd');
    }
    get InitialScheduledEnd() {
        return this.get('InitialScheduledEnd');
    }
    set InitialScheduledEnd(value) {
        this.set('InitialScheduledEnd', value);
    }
    get CanReadFromParties() {
        return this.canRead('FromParties');
    }
    get FromParties() {
        return this.get('FromParties');
    }
    get CanReadSubject() {
        return this.canRead('Subject');
    }
    get CanWriteSubject() {
        return this.canWrite('Subject');
    }
    get Subject() {
        return this.get('Subject');
    }
    set Subject(value) {
        this.set('Subject', value);
    }
    get CanReadDocuments() {
        return this.canRead('Documents');
    }
    get CanWriteDocuments() {
        return this.canWrite('Documents');
    }
    get Documents() {
        return this.get('Documents');
    }
    AddDocument(value) {
        return this.add('Documents', value);
    }
    RemoveDocument(value) {
        return this.remove('Documents', value);
    }
    set Documents(value) {
        this.set('Documents', value);
    }
    get CanReadCase() {
        return this.canRead('Case');
    }
    get CanWriteCase() {
        return this.canWrite('Case');
    }
    get Case() {
        return this.get('Case');
    }
    set Case(value) {
        this.set('Case', value);
    }
    get CanReadPriority() {
        return this.canRead('Priority');
    }
    get CanWritePriority() {
        return this.canWrite('Priority');
    }
    get Priority() {
        return this.get('Priority');
    }
    set Priority(value) {
        this.set('Priority', value);
    }
    get CanReadOwner() {
        return this.canRead('Owner');
    }
    get CanWriteOwner() {
        return this.canWrite('Owner');
    }
    get Owner() {
        return this.get('Owner');
    }
    set Owner(value) {
        this.set('Owner', value);
    }
    get CanReadNote() {
        return this.canRead('Note');
    }
    get CanWriteNote() {
        return this.canWrite('Note');
    }
    get Note() {
        return this.get('Note');
    }
    set Note(value) {
        this.set('Note', value);
    }
    get CanReadActualStart() {
        return this.canRead('ActualStart');
    }
    get CanWriteActualStart() {
        return this.canWrite('ActualStart');
    }
    get ActualStart() {
        return this.get('ActualStart');
    }
    set ActualStart(value) {
        this.set('ActualStart', value);
    }
    get CanReadSendNotification() {
        return this.canRead('SendNotification');
    }
    get CanWriteSendNotification() {
        return this.canWrite('SendNotification');
    }
    get SendNotification() {
        return this.get('SendNotification');
    }
    set SendNotification(value) {
        this.set('SendNotification', value);
    }
    get CanReadSendReminder() {
        return this.canRead('SendReminder');
    }
    get CanWriteSendReminder() {
        return this.canWrite('SendReminder');
    }
    get SendReminder() {
        return this.get('SendReminder');
    }
    set SendReminder(value) {
        this.set('SendReminder', value);
    }
    get CanReadRemindAt() {
        return this.canRead('RemindAt');
    }
    get CanWriteRemindAt() {
        return this.canWrite('RemindAt');
    }
    get RemindAt() {
        return this.get('RemindAt');
    }
    set RemindAt(value) {
        this.set('RemindAt', value);
    }
    get CanReadDerivationTimeStamp() {
        return this.canRead('DerivationTimeStamp');
    }
    get CanWriteDerivationTimeStamp() {
        return this.canWrite('DerivationTimeStamp');
    }
    get DerivationTimeStamp() {
        return this.get('DerivationTimeStamp');
    }
    set DerivationTimeStamp(value) {
        this.set('DerivationTimeStamp', value);
    }
}
exports.FaceToFaceCommunicationVersion = FaceToFaceCommunicationVersion;
//# sourceMappingURL=FaceToFaceCommunicationVersion.g.js.map