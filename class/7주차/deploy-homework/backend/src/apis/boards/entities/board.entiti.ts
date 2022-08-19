import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment') // 중복되지 않는 핵심 컬럼 우리가 지정하는 게 아님
  @Field(() => Int)
  // uuid는 우리가 아는 아이디
  // increment는
  number: number;

  @Column()
  @Field(() => String)
  writer: string;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string; // 여기서는 몽구스 타입이 아닌 타입orm 타입으로 씀
}

// export Board

// 몽고디비에서는 아이디가 자동으로 만들어졌는데 sql에서는 직접 만들어 줘야 됨
