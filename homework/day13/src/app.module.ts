import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { StarbucksModule } from './apis/boards/starbucks.module';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { Board } from './apis/boards/entities/board.entiti';

@Module({
  imports: [
    StarbucksModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: '8507',
    //   database: 'myproject04',
    //   entities: [Board], // 모델
    //   synchronize: true,
    //   logging: true,
    // }),
  ],
})
export class AppModule {}
