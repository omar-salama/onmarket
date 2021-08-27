import { Module } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerEntity } from './models/customer.entity';
import { AddressEntity } from './models/address.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CustomerEntity, AddressEntity])],
  controllers: [CustomerController],
  providers: [CustomerService],
  exports: [CustomerService],
})
export class CustomerModule {}
