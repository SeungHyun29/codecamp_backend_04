import { Column, PrimaryGeneratedColumn, Entity } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column()
  phonenumber: number;

  @Column()
  signupDate: Date;
}
