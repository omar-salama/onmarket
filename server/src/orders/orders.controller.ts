import { Body, Controller, Get, Post } from '@nestjs/common';
import { Order } from './models/orders.interface';
import { OrdersService } from './orders.service';

@Controller('order')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}
  @Post()
  createOne(@Body() order: Order) {
    return this.ordersService.createOrder(order);
  }
  @Get()
  getAll() {
    return this.ordersService.getOrders();
  }
}
