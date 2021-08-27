import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { AddressEntity } from './address.entity';

@Entity('customer')
export class CustomerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @OneToMany(
    () => AddressEntity,
    (address: AddressEntity) => address.customer,
    { cascade: true },
  )
  addresses: AddressEntity[];
}
