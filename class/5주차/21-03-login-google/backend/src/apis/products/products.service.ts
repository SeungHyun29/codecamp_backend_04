import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSaleslocation } from '../productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from '../productsTags/entites/productTag.entity';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,

    @InjectRepository(ProductSaleslocation)
    private readonly productSaleslocationRepository: Repository<ProductSaleslocation>,

    @InjectRepository(ProductTag)
    private readonly productTagRepository: Repository<ProductTag>,
  ) {}

  findAll() {
    return this.productRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  findOne({ productId }) {
    return this.productRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async create({ createProductInput }) {
    // 1. 상품만 등록하는 경우
    // DB에 카테고리 등록
    // const result = await this.productRepository.save({
    //   ...createProductInput,

    // 하나하나 직접 나열하는 방식
    // name: createProductInput.name,
    // description: createProductInput.description,
    // price: createProductInput.price,

    // 2. 상품과 거래위치를 같이 등록하는 경우
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    const result = await this.productSaleslocationRepository.save({
      // 스프레드 연산자를 사용해서 저장하기
      // ...createProductInput.productSaleslocation
      ...productSaleslocation,
    });

    // productsTags // ["#전자제품", "#영등포", "#컴퓨터"]
    const result2 = [];
    for (let i = 0; i < productTags.length; i++) {
      const tagname = productTags[i].replace('#', '');

      const prevTag = await this.productTagRepository.findOne({
        where: { name: tagname },
      });

      // 기존에 태그가 존재한다면
      if (prevTag) {
        result2.push(prevTag);
        // 기존에 태그가 없었다면
      } else {
        const newTag = await this.productTagRepository.save({
          name: tagname,
        });
        result2.push(newTag);
      }
    }

    const result3 = await this.productRepository.save({
      ...product,
      productSaleslocation: result, // result 통째로 넣기 vs id만 넣기
      productCategory: { id: productCategoryId },
      productTags: result2,
    });

    return result3;
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

  async delete({ productId }) {
    // 실제로 삭제하는 방법
    // const result = await this.productRepository.delete({ id: productId });
    // return result.affected ? true : false;

    // 소프트 삭제: 삭제가 된 것처럼 보여 주는 것 isDeleted 컬럼 사용
    // const result = await this.productRepository.update({ id: productId }, { isdeleted: true });

    // 소프트 삭제  - deletedAt 삭제된 시간을 저장하자
    // this.productRepository.update({ id: productId }, { deleteAt: new Date() });
    // 문제 1. deletedAt 컬럼을 따로 또 만들어 줘야 됨
    // 문제 2. 삭제할 때 직접 new Date() 넣어 줘야 됨
    // 문제 3. 삭제된 내용을 조회할 때 조건을 걸어 줘야 됨 (deletedAt이 NULL인 애들만 조회)

    // 소프트 삭제(TypeORM 제공) - softRemoce
    // this.productRepository.softRemove({ id: productId }); id로만 삭제 가능

    // 소프트 삭제(TypeORM 제공) - softDelete
    const result = await this.productRepository.softDelete({ id: productId }); // 다른 거로도 삭제 가능
    return result.affected ? true : false;
  }
}
