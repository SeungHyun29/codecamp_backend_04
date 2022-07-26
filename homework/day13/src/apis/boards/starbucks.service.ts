import { Injectable } from '@nestjs/common';

@Injectable()
export class StarbucksService {
  findAll() {
    // 1. 데이터를 조회하는 로직 => DB에 접속해서 데이터 꺼내오기
    const result = [
      {
        menu: '아이스 카페 아메리카노',
        price: '4500',
        kcal: '10',
        saturated_fat: '1',
        protein: '1',
        salt: '5',
        sugar: '1',
        caffeine: '150',
      },
      {
        menu: '아이스 카페라떼',
        price: '5000',
        kcal: '110',
        saturated_fat: '4',
        protein: '6',
        salt: '76',
        sugar: '8',
        caffeine: '75',
      },
    ];

    // 2. 꺼내온 결과 응답 주기
    return result;
  }

  create({ createStarbucksInput }) {
    console.log({ createStarbucksInput });

    // 1. 데이터를 등록하는 로직 => DB에 접속해서 데이터 저장하기

    // 2. 저장 결과 응답 주기
    return '등록에 성공하였습니다';
  }
}
