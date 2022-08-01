import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { UserService } from '../users/users.service';
import { AuthsService } from './auths.service';

interface IOAuthUser {
  user: {
    email: string;
    hashedPassword: string;
    name: string;
    phonenumber: string;
  };
}

@Controller()
export class AuthsController {
  constructor(
    private readonly usersService: UserService, //
    private readonly authsService: AuthsService,
  ) {}
  @Get('/login/google')
  @UseGuards(AuthGuard('google'))
  async loginGoogle(
    @Req() req: Request & IOAuthUser, //
    @Res() res: Response,
  ) {
    // 1. 가입 확인
    let user = await this.usersService.findOneUser({ email: req.user.email });

    // 2. 회원가입
    if (!user) {
      user = await this.usersService.create({
        ...req.user,

        // email: req.user.email,
        // hashedPassword: req.user.hashedpassword, // 어차피 못 써서 아무거나 보냄
        // name: req.user.name,
        // age: req.user.age,
      });
    }

    // 3. 로그인 (accessToken 만들어서 프론트엔드 주기)
    this.authsService.setRefreshToken({ user, res });
    res.redirect(
      'http://localhost:5500/main-project/frontend/login/index.html',
    );
  }
}
