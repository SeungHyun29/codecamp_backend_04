import {
  EntitySubscriberInterface,
  InsertEvent,
  EventSubscriber,
  DataSource,
} from 'typeorm';
import { Product } from './product.entity';
import { BigQuery } from '@google-cloud/bigquery';

@EventSubscriber()
export class ProductsSubscriber implements EntitySubscriberInterface<Product> {
  constructor(dataSource: DataSource) {
    dataSource.subscribers.push(this);
  }

  listenTo() {
    return Product;
  }

  afterInsert(event: InsertEvent<Product>): void | Promise<any> {
    console.log(event);

    const bigQuery = new BigQuery({
      keyFilename: 'reliable-aloe-358105-94091cf6b57a.json',
      projectId: 'reliable-aloe-358105',
    });

    bigQuery
      .dataset('mybigquery04') // DB 이름
      .table('productlog') // table 이름
      .insert([
        // insert는 여러 개의 데이터를 동시에 저장 가능(배열) 그래서 배열 안에 객체로 저장
        {
          id: event.entity.id,
          name: event.entity.name,
          description: event.entity.description,
          price: event.entity.price,
          isSoldout: event.entity.isSoldout,
        },
      ]);
  }
}
