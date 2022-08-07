import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateOrderInput } from './dto/createOrder.input';
import { Order } from './entity/order.entity';
import { OrderService } from './orders.service';

@Resolver()
export class OrderResolver {
  constructor(
    private readonly orderService: OrderService, //
  ) {}

  @Mutation(() => Order)
  createOrder(
    @Args('createOrderInput') createOrderInput: CreateOrderInput, //
  ) {
    return this.orderService.createOrder({ createOrderInput });
  }
}
