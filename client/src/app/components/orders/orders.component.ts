import { Component, OnDestroy, OnInit } from '@angular/core';
// import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';
// import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit {
  // orders: any;
  // cstOrder: any;
  // eve!: Subscription;


  constructor() {}

  ngOnInit(): void {
    // this.getOrders();
  }

  // getOrders() {
  //   this.orderService.getOrders(this.page).subscribe(
  //     (res) => {
  //       this.orders = res.orders;
  //       this.totalPages = res.totalPages;
  //     },
  //     (err) => {
  //       this.if_error(err);
  //     }
  //   );
  // }

  // if_error(err: any) {
  //   this.binding.changeLoading(false);
  //   this.tostr.error(err, 'Error', { positionClass: 'toast-top-center' });
  // }

  // ngOnDestroy(): void {
  //   if (this.eve != undefined) this.eve.unsubscribe();
  // }
}
