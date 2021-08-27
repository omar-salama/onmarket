import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer: CustomerEntity) => customer.addresses,
  )
  customer: CustomerEntity;
}
