import { ProductMainCategory } from 'src/apis/productsMainCategories/entites/productMainCategory.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class ProductSubCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => ProductMainCategory)
  productMainCategory: ProductMainCategory;
}
