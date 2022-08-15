import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hamster } from '../Hamsters/entites/Hamster.entity';
import { ProductDetail } from '../productsDetails/entities/productDetail.entity';
import { ProductImage } from '../productsImages/entites/productImage.entity';
import { Product } from './entities/product.entity';
import { ProductResolver } from './products.resolver';
import { ProductService } from './products.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Product, //
      ProductDetail,
      Hamster,
      ProductImage,
    ]),
  ],
  providers: [
    ProductResolver, //
    ProductService,
  ],
})
export class ProductModule {}
