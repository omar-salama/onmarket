import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CustomerEntity } from './customer.entity';

@Entity('address')
export class AddressEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @ManyToOne(
    () => CustomerEntity,
    (customer: CustomerEntity) => customer.addresses,
  )
  customer: CustomerEntity;
}
