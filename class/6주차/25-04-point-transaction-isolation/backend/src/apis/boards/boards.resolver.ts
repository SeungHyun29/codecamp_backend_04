import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { write } from 'fs';
import { title } from 'process';
import { writer } from 'repl';
import { BoardsService } from './boards.service';
import { createBoardInput } from './dto/createBoard.input';
import { Board } from './entities/board.entiti';

@Resolver()
export class BoardsResolver {
  constructor(private readonly boardsService: BoardsService) {}

  // @Query(() => String) //graphql 타입 스키마 파일 자동으로 해 주기 위한 타입 지정
  // getHello(): string {
  //   // 타입스크립트
  //   return this.boardsService.getHello();
  // }

  @Query(() => [Board])
  fetchBoards() {
    return this.boardsService.findAll();
  }

  @Mutation(() => String)
  createBoard(
    // @Args('writer') writer: string,
    // @Args('title') title: string,
    // @Args('contents') contents: string,
    @Args('createBoardInput') createBoardInput: createBoardInput,
  ) {
    return this.boardsService.create({ createBoardInput });
  }
} // 컨트롤러가 리졸버
