import { Module } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { AuthsResolver } from './auths.resolver';
import { AuthsService } from './auths.service';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { JwtAccessStrategy } from 'src/commons/auth/jwt-access.strategy';
import { JwtRefreshStrategy } from 'src/commons/auth/jwt-refresh.strategy';
import { AuthsController } from './auths.controller';
import { JwtGoogleStrategy } from 'src/commons/auth/jwt-social-google.strategy';

@Module({
  imports: [
    JwtModule.register({}), //
    TypeOrmModule.forFeature([
      User, //
    ]),
  ],
  providers: [
    JwtGoogleStrategy,
    JwtAccessStrategy,
    JwtRefreshStrategy,
    AuthsResolver, //
    AuthsService,
    UserService,
  ],
  controllers: [
    AuthsController, //
  ],
})
export class AuthsModule {}
