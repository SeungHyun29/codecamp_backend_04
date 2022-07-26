import { Payment } from 'src/apis/payments/entites/payment.entity';
import { Product } from 'src/apis/products/entities/product.entity';
import { User } from 'src/apis/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  order_date: Date;

  @Column()
  cs: string;

  @Column()
  quantity: number;

  @Column()
  order_number: string;

  @ManyToOne(() => Product)
  product: Product;

  @ManyToOne(() => User)
  user: User;

  @JoinColumn()
  @OneToOne(() => Payment)
  payment: Payment;
}
