import { Field, Int, ObjectType } from '@nestjs/graphql';
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
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => String)
  expDetail: string;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @ManyToOne(() => ProductSubCategory)
  @Field(() => ProductSubCategory)
  productSubCategory: ProductSubCategory;

  @JoinColumn()
  @OneToOne(() => ProductDetail)
  @Field(() => ProductDetail)
  productDetail: ProductDetail;

  @JoinTable()
  @ManyToMany(() => Hamster, (hamsters) => hamsters.products)
  @Field(() => [Hamster])
  hamsters: Hamster[];
}
