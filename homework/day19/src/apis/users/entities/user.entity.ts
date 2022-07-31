import { Field, Int, ObjectType } from '@nestjs/graphql';
import {
  Column,
  PrimaryGeneratedColumn,
  Entity,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  email: string;

  @Column()
  password: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  phonenumber: string;

  @CreateDateColumn()
  @Field(() => Date)
  signupDate: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
