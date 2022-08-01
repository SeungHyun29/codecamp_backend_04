import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hamster } from '../Hamsters/entites/Hamster.entity';
import { ProductDetail } from '../productsDetails/entities/productDetail.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductDetail)
    private readonly productDetailRepository: Repository<ProductDetail>,

    @InjectRepository(Hamster)
    private readonly hamsterRepository: Repository<Hamster>,
  ) {}

  async findAll() {
    return await this.productRepository.find({
      relations: ['productDetail', 'productSubCategory', 'hamsters'],
    });
  }

  async findOne({ productId }) {
    return await this.productRepository.findOne({
      where: { id: productId },
      relations: ['productDetail', 'productSubCategory', 'hamsters'],
    });
  }

  async WithDelete() {
    return await this.productRepository.find({
      relations: ['productDetail', 'productSubCategory', 'hamsters'],
      withDeleted: true,
    });
  }

  async create({ createProductInput }) {
    const { productDetail, productSubCategoryId, hamsters, ...product } =
      createProductInput;

    console.log(product);

    const result = await this.productDetailRepository.save({
      // 스프레드 연산자를 사용해서 저장하기
      // ...createProductInput.productSaleslocation
      ...productDetail,
    });

    const hamsterresult = [];
    for (let i = 0; i < hamsters.length; i++) {
      const hamstername = hamsters[i];

      const prevHamster = await this.productRepository.findOne({
        where: { name: hamstername },
      });

      // 기존에 태그가 존재한다면
      if (prevHamster) {
        hamsterresult.push(prevHamster);
        // 기존에 태그가 없었다면
      } else {
        const newHamster = await this.hamsterRepository.save({
          name: hamstername,
        });
        hamsterresult.push(newHamster);
      }
    }

    const result2 = await this.productRepository.save({
      ...product,
      productDetail: result, // result 통째로 넣기 vs id만 넣기
      productSubCategory: { id: productSubCategoryId },
      hamsters: hamsterresult,
    });

    return result2;
  }

  async update({ productId, updateProductInput }) {
    // 수정 후 결과값까지 받을 때 사용
    const myproduct = await this.productRepository.findOne({
      where: { id: productId },
    });

    const result = this.productRepository.save({
      ...myproduct,
      id: productId,
      ...updateProductInput,
    });
    return result;

    // 수정할 때만 쓰는 로직
    // this.productRepository.update(
    //   { id: productId },
    //   {
    //     ...updateProductInput,
    //     // name: updateProductInput.name,
    //     // description: updateProductInput.description,
    //     // price: updateProductInput.price,
    //   },
    // );
  }

  async delete({ productId }) {
    const result = await this.productRepository.softDelete({ id: productId });
    return result.affected ? true : false;
  }

  async restore({ productId }) {
    const result = await this.productRepository.restore({ id: productId });
    return result.affected ? true : false;
  }

  async checkSoldout({ productId }) {
    const product = await this.productRepository.findOne({
      where: { id: productId },
    });
    if (product.isSoldout)
      throw new UnprocessableEntityException('이미 판매 완료된 상품입니다.');
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매 완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }
  }
}
