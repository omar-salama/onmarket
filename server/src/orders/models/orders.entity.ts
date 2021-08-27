import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { CustomerEntity } from '../../customer/models/customer.entity';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'items', type: 'json' })
  public items: any;

  @Column()
  total: number;

  @Column()
  storeName: string;

  @Column()
  customerAddress: string;
}
