import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { UpdateUserInput } from './dto/updateUser.input';
import { User } from './entities/user.entity';
import { UserService } from './users.service';

@Resolver()
export class UserResolver {
  constructor(
    private readonly userService: UserService, //
  ) {}

  @Query(() => [User])
  fetchUsers() {
    return this.userService.findAll();
  }

  @Query(() => User)
  fetchUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.findOne({ userId });
  }

  @Query(() => [User])
  fetchUserWithDeleted() {
    return this.userService.WithDelete();
  }

  @Mutation(() => User)
  createUser(
    @Args('email') email: string,
    @Args('password') password: string,
    @Args('name') name: string,
    @Args('phonenumber') phonenumber: string,
  ) {
    return this.userService.create({
      email,
      password,
      name,
      phonenumber,
    });
  }

  @Mutation(() => User)
  async updateuser(
    @Args('userId') userId: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput, //
  ) {
    await this.userService.checkUserPassword({ UpdateUserInput });

    return this.userService.update({ userId, updateUserInput });
  }

  @Mutation(() => Boolean)
  deleteUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.delete({ userId });
  }

  @Mutation(() => Boolean)
  restoreUser(
    @Args('userId') userId: string, //
  ) {
    return this.userService.restore({ userId });
  }
}
