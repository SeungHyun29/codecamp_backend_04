import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductDetail {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;
}
