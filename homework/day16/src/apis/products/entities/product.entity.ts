import { Hamster } from 'src/apis/Hamsters/entites/Hamster.entity';
import { ProductDetail } from 'src/apis/productsDetails/entities/productDetail.entity';
import { ProductSubCategory } from 'src/apis/productsSubCategories/entites/productSubCategory.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column()
  expDetail: Date;

  @ManyToOne(() => ProductSubCategory)
  productSubCategory: ProductSubCategory;

  @JoinColumn()
  @OneToOne(() => ProductDetail)
  productDetail: ProductDetail;

  @JoinTable()
  @ManyToMany(() => Hamster, (hamsters) => hamsters.products)
  hamsters: Hamster[];
}
