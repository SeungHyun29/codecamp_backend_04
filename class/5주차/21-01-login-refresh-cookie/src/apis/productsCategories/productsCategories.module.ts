import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductCategory } from './entites/productCategory.entity';
import { ProductCategoryResolver } from './productsCategories.resolver';
import { ProductCategoryService } from './productsCategories.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductCategory, //
    ]),
  ],
  providers: [
    ProductCategoryResolver, //
    ProductCategoryService,
  ],
})
export class ProductCategoryModule {}
