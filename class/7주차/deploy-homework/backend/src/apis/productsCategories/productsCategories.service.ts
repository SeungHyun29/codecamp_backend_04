import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductCategory } from './entites/productCategory.entity';

@Injectable()
export class ProductCategoryService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}
  async create({ name }) {
    // DB에 카테고리 등록
    const result = await this.productCategoryRepository.save({ name: name });
    console.log(result); // { id: dsafa-qewrw, name: 의류 }
    return result;
  }
}
