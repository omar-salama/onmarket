import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Customer } from './models/customer.interface';
import { CustomerEntity } from './models/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepo: Repository<CustomerEntity>,
  ) {}

  async createUser(user: Customer) {
    const customer = await this.customerRepo.save(user);
    return customer;
  }

  async getUser(id: string) {
    const customer = await this.customerRepo.findOne(id, {
      relations: ['addresses'],
    });
    return customer;
  }

  async getUserAddresses(id: string) {
    const customer = await this.customerRepo.findOne(id, {
      relations: ['addresses'],
    });
    return customer.addresses;
  }
}
