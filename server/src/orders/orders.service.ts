import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import getTotalPrice from 'src/helpers/getTotalPrice';
import { Repository } from 'typeorm';
import { OrdersEntity } from './models/orders.entity';
import { Order } from './models/orders.interface';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly orderRepo: Repository<OrdersEntity>,
  ) {}

  async createOrder(order: Order) {
    const totalOrderPrice = getTotalPrice(order);
    const newOrder = await this.orderRepo.create({
      ...order,
      total: totalOrderPrice,
      customerAddress: 'tempAddr',
    });

    const savedOrder = await this.orderRepo.save(newOrder);
    return savedOrder;
  }
}
