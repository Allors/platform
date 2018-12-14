import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material';

import { ids } from '../allors/meta/generated';

import { ObjectService, OBJECT_CREATE_TOKEN, OBJECT_EDIT_TOKEN } from '../allors/angular/base/object';

import { EmailCommunicationCreateComponent, EmailCommunicationCreateModule } from '../allors/material/apps/objects/emailcommunication/create/emailcommunication-create.module';
import { FaceToFaceCommunicationCreateComponent, FaceToFaceCommunicationCreateModule } from '../allors/material/apps/objects/facetofacecommunication/create/facetofacecommunication-create.module';
import { LetterCorrespondenceCreateComponent, LetterCorrespondenceCreateModule } from '../allors/material/apps/objects/lettercorrespondence/create/lettercorrespondence-create.module';
import { OrganisationCreateModule, OrganisationCreateComponent } from '../allors/material/apps/objects/organisation/create/organisation-create.module';
import { PersonCreateModule, PersonCreateComponent } from '../allors/material/apps/objects/person/create/person-create.module';
import { PhoneCommunicationCreateComponent } from '../allors/material/apps/objects/phonecommunication/create/phonecommunication-create.component';
import { PhoneCommunicationCreateModule } from '../allors/material/apps/objects/phonecommunication/create/phonecommunication-create.module';
import { RequestItemEditComponent, RequestItemEditModule } from '../allors/material/apps/objects/requestitem/edit/requestitem-edit.module';
import { RequestForQuoteCreateComponent, RequestForQuoteCreateModule } from '../allors/material/apps/objects/requestforquote/create/requestforquote-create.module';
import { ProductQuoteCreateComponent, ProductQuoteCreateModule } from '../allors/material/apps/objects/productquote/create/productquote-create.module';
import { QuoteItemEditComponent, QuoteItemEditModule } from '../allors/material/apps/objects/quoteitem/edit/quoteitem-edit.module';
import { SalesOrderCreateComponent, SalesOrderCreateModule } from '../allors/material/apps/objects/salesorder/create/salesorder-create.module';
import { SalesOrderItemEditComponent, SalesOrderItemEditModule } from '../allors/material/apps/objects/salesorderitem/edit/salesorderitem-edit.module';
import { SalesTermEditComponent, SalesTermEditModule } from '../allors/material/apps/objects/salesterm/edit/salesterm-edit.module';

const create = {
  [ids.EmailCommunication]: EmailCommunicationCreateComponent,
  [ids.IncoTerm]: SalesTermEditComponent,
  [ids.InvoiceTerm]: SalesTermEditComponent,
  [ids.OrderTerm]: SalesTermEditComponent,
  [ids.FaceToFaceCommunication]: FaceToFaceCommunicationCreateComponent,
  [ids.LetterCorrespondence]: LetterCorrespondenceCreateComponent,
  [ids.Organisation]: OrganisationCreateComponent,
  [ids.Person]: PersonCreateComponent,
  [ids.PhoneCommunication]: PhoneCommunicationCreateComponent,
  [ids.ProductQuote]: ProductQuoteCreateComponent,
  [ids.QuoteItem]: QuoteItemEditComponent,
  [ids.RequestItem]: RequestItemEditComponent,
  [ids.RequestForQuote]: RequestForQuoteCreateComponent,
  [ids.SalesOrder]: SalesOrderCreateComponent,
  [ids.SalesOrderItem]: SalesOrderItemEditComponent,
};

const edit = {
  [ids.IncoTerm]: SalesTermEditComponent,
  [ids.InvoiceTerm]: SalesTermEditComponent,
  [ids.OrderTerm]: SalesTermEditComponent,
  [ids.QuoteItem]: QuoteItemEditComponent,
  [ids.RequestItem]: RequestItemEditComponent,
  [ids.SalesOrderItem]: SalesOrderItemEditComponent,
};

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,

    EmailCommunicationCreateModule,
    FaceToFaceCommunicationCreateModule,
    LetterCorrespondenceCreateModule,
    OrganisationCreateModule,
    PersonCreateModule,
    PhoneCommunicationCreateModule,
    ProductQuoteCreateModule,
    QuoteItemEditModule,
    RequestItemEditModule,
    RequestForQuoteCreateModule,
    SalesOrderCreateModule,
    SalesOrderItemEditModule,
    SalesTermEditModule,
  ],
  entryComponents: [
    EmailCommunicationCreateComponent,
    FaceToFaceCommunicationCreateComponent,
    LetterCorrespondenceCreateComponent,
    OrganisationCreateComponent,
    PersonCreateComponent,
    PhoneCommunicationCreateComponent,
    ProductQuoteCreateComponent,
    QuoteItemEditComponent,
    RequestItemEditComponent,
    RequestForQuoteCreateComponent,
    SalesOrderCreateComponent,
    SalesOrderItemEditComponent,
    SalesTermEditComponent,
  ],
  providers: [
    ObjectService,
    { provide: OBJECT_CREATE_TOKEN, useValue: create },
    { provide: OBJECT_EDIT_TOKEN, useValue: edit },
  ]
})
export class ObjectModule {

  constructor(@Optional() @SkipSelf() core: ObjectModule) {
    if (core) {
      throw new Error('Use FactoryModule from AppModule');
    }
  }

}