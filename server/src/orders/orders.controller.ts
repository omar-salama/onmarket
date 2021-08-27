import { Body, Controller, Post } from '@nestjs/common';
import { Order } from './models/orders.interface';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  createOne(@Body() order: Order) {
    return this.ordersService.createOrder(order);
  }
}
