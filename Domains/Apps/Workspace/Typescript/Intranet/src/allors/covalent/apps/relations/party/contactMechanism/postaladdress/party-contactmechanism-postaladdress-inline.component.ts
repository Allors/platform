import { Component, EventEmitter, Input, OnInit , Output } from "@angular/core";

import { ErrorService, Loaded, Scope, WorkspaceService } from "../../../../../../angular";
import { PartyContactMechanism, PostalAddress, PostalBoundary, ContactMechanismPurpose, Country } from "../../../../../../domain";
import { PullRequest, Query } from "../../../../../../framework";
import { MetaDomain } from "../../../../../../meta";

@Component({
  selector: "party-contactmechanism-postaladdress",
  templateUrl: "./party-contactmechanism-postaladdress-inline.component.html",
})
export class PartyContactMechanismPostalAddressInlineComponent implements OnInit {

  @Output()
  public saved: EventEmitter<PartyContactMechanism> = new EventEmitter<PartyContactMechanism>();

  @Output()
  public cancelled: EventEmitter<any> = new EventEmitter();

  @Input() public scope: Scope;

  public partyContactMechanism: PartyContactMechanism;
  public postalAddress: PostalAddress;
  public postalBoundary: PostalBoundary;
  public countries: Country[];
  public contactMechanismPurposes: ContactMechanismPurpose[];

  public m: MetaDomain;

  constructor(private workspaceService: WorkspaceService, private errorService: ErrorService) {

    this.m = this.workspaceService.metaPopulation.metaDomain;
  }

  public ngOnInit(): void {
    const query: Query[] = [
      new Query(
        {
          name: "countries",
          objectType: this.m.Country,
        }),
      new Query(
        {
          name: "contactMechanismPurposes",
          objectType: this.m.ContactMechanismPurpose,
        }),
      ];

    this.scope
      .load("Pull", new PullRequest({ query }))
      .subscribe((loaded: Loaded) => {
        this.countries = loaded.collections.countries as Country[];
        this.contactMechanismPurposes = loaded.collections.contactMechanismPurposes as ContactMechanismPurpose[];

        this.partyContactMechanism = this.scope.session.create("PartyContactMechanism") as PartyContactMechanism;
        this.postalAddress = this.scope.session.create("PostalAddress") as PostalAddress;
        this.postalBoundary = this.scope.session.create("PostalBoundary") as PostalBoundary;
        this.partyContactMechanism.ContactMechanism = this.postalAddress;
        this.postalAddress.PostalBoundary = this.postalBoundary;
      },
      (error: any) => {
        this.cancelled.emit();
      },
    );
  }

  public cancel(): void {
    this.cancelled.emit();
  }

  public save(): void {
    this.saved.emit(this.partyContactMechanism);
  }
}