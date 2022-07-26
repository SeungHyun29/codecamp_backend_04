import { User } from 'src/apis/users/entities/user.entity';
import { Column, PrimaryGeneratedColumn, Entity, ManyToOne } from 'typeorm';

@Entity()
export class UserAddress {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  address: string;

  @Column()
  address_detail: string;

  @Column()
  zip_code: string;

  @ManyToOne(() => User)
  user: User;
}
