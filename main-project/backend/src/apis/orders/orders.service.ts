import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entity/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly ordersRepository: Repository<Order>,
  ) {}

  async createOrder({ createOrderInput }) {
    const { productId, cs, quantity, orderNumber } = createOrderInput;

    const result = await this.ordersRepository.save({
      product: { id: productId },
      cs,
      quantity,
      orderNumber,
    });

    return result;
  }
}
