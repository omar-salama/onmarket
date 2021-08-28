import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrdersService } from 'src/services/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: any;
  eve!: Subscription;

  constructor(private orderService: OrdersService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.eve = this.orderService.getAllOrders().subscribe(
      (res) => {
        console.log(res);
        this.orders = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  ngOnDestroy() {
    this.eve.unsubscribe();
  }
}
