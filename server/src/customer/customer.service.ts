import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    if (!customer) {
      throw new HttpException('Customer not found.', HttpStatus.NOT_FOUND);
    }
    return customer;
  }

  async getUserAddresses(id: string) {
    const addresses = await this.customerRepo
      .createQueryBuilder('customer')
      .leftJoinAndSelect('customer.addresses', 'addresses')
      .select(['customer.id', 'addresses.address'])
      .where('customer.id = :id', { id: id })
      .getOne();
    if (!addresses) {
      throw new HttpException('Addresses not found.', HttpStatus.NOT_FOUND);
    }
    return addresses.addresses;
  }
}
