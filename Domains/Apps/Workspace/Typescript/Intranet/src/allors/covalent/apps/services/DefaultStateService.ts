import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { FilterFactory, WorkspaceService } from "../../../angular";
import { Organisation } from "../../../domain";
import { And, ContainedIn, Equals, Query } from "../../../framework";
import { MetaDomain } from "../../../meta";
import { StateService } from "./StateService";

@Injectable()
export class DefaultStateService extends StateService {
    private static readonly internalOrganisationIdKey = "StateService$InternalOrganisationId";
    private static readonly singletonIdKey = "StateService$SingletonId";

    private internalOrganisationIdSubject: BehaviorSubject<string>;

    constructor(private workspaceService: WorkspaceService) {
        super();

        const sessionInternalOrganisationId = sessionStorage.getItem(DefaultStateService.internalOrganisationIdKey);
        this.internalOrganisationIdSubject = new BehaviorSubject(sessionInternalOrganisationId);
        this.internalOrganisationId$ = this.internalOrganisationIdSubject;

        const m: MetaDomain = this.workspaceService.metaPopulation.metaDomain;

        this.goodsFilter = new FilterFactory({
            objectType: m.Good,
            roleTypes: [m.Good.Name],
            post: (predicate: And) => {
                const query = new Query({
                    objectType: m.VendorProduct,
                    predicate: new Equals({ roleType: m.VendorProduct.InternalOrganisation, value: this.internalOrganisationId }),
                });

                predicate.predicates.push(new ContainedIn({ associationType: m.Product.VendorProductsWhereProduct, query }));
            },
        });

        this.customersFilter = new FilterFactory({
            objectType: m.Party,
            roleTypes: [m.Party.PartyName],
            post: (predicate: And) => {
                const query = new Query({
                    objectType: m.CustomerRelationship,
                    predicate: new Equals({ roleType: m.CustomerRelationship.InternalOrganisation, value: this.internalOrganisationId }),
                });

                predicate.predicates.push(new ContainedIn({ associationType: m.Party.CustomerRelationshipsWhereCustomer, query }));
            },
        });
    }

    public get singletonId(): string {
        const key = DefaultStateService.singletonIdKey;
        return sessionStorage.getItem(key);
    }

    public set singletonId(value: string) {
        const key = DefaultStateService.singletonIdKey;
        sessionStorage.setItem(key, value);
    }

    public get internalOrganisationId(): string {
        return this.internalOrganisationIdSubject.value;
    }

    public set internalOrganisationId(value: string) {
        sessionStorage.setItem(DefaultStateService.internalOrganisationIdKey, value);
        this.internalOrganisationIdSubject.next(value);
    }
}
