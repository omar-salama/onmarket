import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
