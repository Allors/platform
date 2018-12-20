import { Component, Self } from '@angular/core';
import { PanelService, NavigationService, MetaService, Invoked, RefreshService, ErrorService } from '../../../../../../angular';
import { Good, PurchaseOrder, PurchaseInvoice, SalesOrder, SalesInvoice, RepeatingSalesInvoice, SalesTerm, SalesInvoiceItem } from '../../../../../../domain';
import { Meta } from '../../../../../../meta';
import { MatSnackBar } from '@angular/material';
import { Sort, Equals } from 'src/allors/framework';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'salesinvoice-overview-summary',
  templateUrl: './salesinvoice-overview-summary.component.html',
  providers: [PanelService]
})
export class SalesInvoiceOverviewSummaryComponent {

  m: Meta;

  public order: SalesOrder;
  public invoice: SalesInvoice;
  public repeatingInvoices: RepeatingSalesInvoice[];
  public repeatingInvoice: RepeatingSalesInvoice;
  public goods: Good[] = [];

  constructor(
    @Self() public panel: PanelService,
    public metaService: MetaService,
    public navigation: NavigationService,
    public refreshService: RefreshService,
    public snackBar: MatSnackBar,
    public errorService: ErrorService) {

    this.m = this.metaService.m;

    panel.name = 'summary';

    const salesInvoicePullName = `${panel.name}_${this.m.PurchaseInvoice.name}`;
    const salesOrderPullName = `${panel.name}_${this.m.PurchaseOrder.name}`;
    const goodPullName = `${panel.name}_${this.m.Good.name}`;
    const repeatingSalesInvoicePullName = `${panel.name}_${this.m.Good.name}`;

    panel.onPull = (pulls) => {
      const { m, pull, x } = this.metaService;

      const { id } = this.panel.manager;

      pulls.push(
        pull.SalesInvoice({
          name: salesInvoicePullName,
          object: id,
          include: {
            SalesInvoiceItems: {
              Product: x,
              InvoiceItemType: x,
            },
            SalesTerms: {
              TermType: x,
            },
            BillToCustomer: x,
            BillToContactPerson: x,
            ShipToCustomer: x,
            ShipToContactPerson: x,
            ShipToEndCustomer: x,
            ShipToEndCustomerContactPerson: x,
            SalesInvoiceState: x,
            CreatedBy: x,
            LastModifiedBy: x,
            SalesOrder: x,
            BillToContactMechanism: {
              PostalAddress_PostalBoundary: {
                Country: x
              }
            },
            ShipToAddress: {
              PostalBoundary: {
                Country: x
              }
            },
            BillToEndCustomerContactMechanism: {
              PostalAddress_PostalBoundary: {
                Country: x
              }
            },
            ShipToEndCustomerAddress: {
              PostalBoundary: {
                Country: x
              }
            }
          }
        }),
        pull.SalesInvoice({
          name: salesOrderPullName,
          object: id,
          fetch: {
            SalesOrder: x
          }
        }),
        pull.Good({
          name: goodPullName,
          sort: new Sort(m.Good.Name),
        }),
        pull.RepeatingSalesInvoice({
          name: repeatingSalesInvoicePullName,
          predicate: new Equals({ propertyType: m.RepeatingSalesInvoice.Source, object: id }),
          include: {
            Frequency: x,
            DayOfWeek: x
          }
        }),
      );
    };

    panel.onPulled = (loaded) => {
      this.goods = loaded.collections.Goods as Good[];
      this.order = loaded.objects.SalesOrder as SalesOrder;
      this.invoice = loaded.objects.SalesInvoice as SalesInvoice;
      this.repeatingInvoices = loaded.collections.RepeatingSalesInvoices as RepeatingSalesInvoice[];
      if (this.repeatingInvoices.length > 0) {
        this.repeatingInvoice = this.repeatingInvoices[0];
      } else {
        this.repeatingInvoice = undefined;
      }
    };
  }

  print() {
    //TODO:
  }

  send() {

    this.panel.manager.context.invoke(this.invoice.Send)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully sent.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public cancel(): void {

    this.panel.manager.context.invoke(this.invoice.CancelInvoice)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully cancelled.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public writeOff(): void {

    this.panel.manager.context.invoke(this.invoice.WriteOff)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully written off.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public reopen(): void {

    this.panel.manager.context.invoke(this.invoice.Reopen)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully Reopened.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public credit(): void {

    this.panel.manager.context.invoke(this.invoice.Credit)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully Credited.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public copy(): void {

    this.panel.manager.context.invoke(this.invoice.Copy)
      .subscribe((invoked: Invoked) => {
        this.refreshService.refresh();
        this.snackBar.open('Successfully copied.', 'close', { duration: 5000 });
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public deleteInvoiceItem(invoiceItem: SalesInvoiceItem): void {

    this.panel.manager.context.invoke(invoiceItem.Delete)
      .subscribe((invoked: Invoked) => {
        this.snackBar.open('Successfully deleted.', 'close', { duration: 5000 });
        this.refreshService.refresh();
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

  public deleteSalesTerm(salesTerm: SalesTerm): void {

    this.panel.manager.context.invoke(salesTerm.Delete)
      .subscribe((invoked: Invoked) => {
        this.snackBar.open('Successfully deleted.', 'close', { duration: 5000 });
        this.refreshService.refresh();
      },
        (error: Error) => {
          this.errorService.handle(error);
        });
  }

}
