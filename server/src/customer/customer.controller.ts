import { Body, Controller, Param, Post, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './models/customer.interface';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}
  @Post()
  createOne(@Body() user: Customer) {
    return this.customerService.createUser(user);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.customerService.getUser(id);
  }
}
