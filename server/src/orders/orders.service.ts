import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import getTotalPrice from 'src/helpers/getTotalPrice';
import { Repository } from 'typeorm';
import { OrdersEntity } from './models/orders.entity';
import { Order } from './models/orders.interface';
import { CustomerService } from 'src/customer/customer.service';
@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(OrdersEntity)
    private readonly orderRepo: Repository<OrdersEntity>,
    private readonly customerService: CustomerService,
  ) {}

  // Show available customer addresses in the frontend (dropdown list perhaps)
  // Parse the selected address index to the function
  async getCustomerAddress(selectedAddressIndex: number) {
    const listOfAddresses: any = await this.customerService.getUserAddresses(
      '95ad6816-0161-46ca-881f-96637f109556',
    );
    return listOfAddresses[selectedAddressIndex].address;
  }

  async createOrder(order: Order) {
    const totalOrderPrice = getTotalPrice(order);
    const customerAddress = await this.getCustomerAddress(0);
    console.log(customerAddress);
    const newOrder = await this.orderRepo.create({
      ...order,
      customerAddress: customerAddress,
      total: totalOrderPrice,
    });
    const savedOrder = await this.orderRepo.save(newOrder);
    return savedOrder;
  }
}
