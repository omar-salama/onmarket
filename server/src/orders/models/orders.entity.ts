import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
// import { CustomerEntity } from '../../customer/models/customer.entity';

@Entity('orders')
export class OrdersEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'items', type: 'json' })
  public items: any;

  @Column()
  total: number;

  @Column()
  storeName: string;

  @Column()
  customerAddress: string;
}
