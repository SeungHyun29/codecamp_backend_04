import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { Payment, PAYMENT_STATUS_ENUM } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(
    @InjectRepository(Payment)
    private readonly paymentsRepository: Repository<Payment>,

    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create({ impUid, paymentAmount, user: _user }) {
    // 1. payment 테이블에 거래 기록 한 줄 생성
    const payment = this.paymentsRepository.create({
      impUid,
      paymentAmount,
      user: _user,
      status: PAYMENT_STATUS_ENUM.PAYMENT,
    });

    await this.paymentsRepository.save(payment);

    // 2. 유저의 돈 찾아오기
    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    // 3. 유저의 돈 업데이트
    await this.usersRepository.update(
      { id: _user.id },
      { point: user.point + paymentAmount },
    );

    // 4. 최종 결과 프론트엔드에 돌려주기
    return payment;
  }

  async createCancel({ impUid, paymentAmount, user: _user }) {
    const payment = this.paymentsRepository.create({
      impUid,
      paymentAmount: -paymentAmount,
      user: _user,
      status: PAYMENT_STATUS_ENUM.CANCEL,
    });

    await this.paymentsRepository.save(payment);

    const user = await this.usersRepository.findOne({
      where: { id: _user.id },
    });

    await this.usersRepository.update(
      { id: _user.id },
      { point: user.point - paymentAmount },
    );

    return payment;
  }

  async findStatus({ impUid }) {
    return await this.paymentsRepository.findOne({
      where: { impUid },
    });
  }
}
