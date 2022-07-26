import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductMainCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;
}
