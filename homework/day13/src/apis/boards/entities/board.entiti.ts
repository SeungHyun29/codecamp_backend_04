import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment') // 중복되지 않는 핵심 컬럼 우리가 지정하는 게 아님
  @Column()
  @Field(() => String)
  menu: string;

  @Column()
  @Field(() => String)
  price: string;

  @Column()
  @Field(() => String)
  kcal: string;

  @Column()
  @Field(() => String)
  saturated_fat: string;

  @Column()
  @Field(() => String)
  protein: string;

  @Column()
  @Field(() => String)
  salt: string;

  @Column()
  @Field(() => String)
  sugar: string;

  @Column()
  @Field(() => String)
  caffeine: string; // 여기서는 몽구스 타입이 아닌 타입orm 타입으로 씀
}

// export Board

// 몽고디비에서는 아이디가 자동으로 만들어졌는데 sql에서는 직접 만들어 줘야 됨
