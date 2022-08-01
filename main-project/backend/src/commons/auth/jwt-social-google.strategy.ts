import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth20';

export class JwtGoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.CLIENTID,
      clientSecret: process.env.CLIENTSECRET,
      callbackURL: 'http://localhost:3000/login/google',
      scope: ['email', 'profile'],
    });

    console.log('야', process.env.CLIENTID);
  }

  validate(_, __, profile) {
    console.log(profile);
    return {
      email: profile.emails[0].value,
      hashedPassword: '1234',
      name: profile.displayName,
      phonenumber: '01012345678',
    };
  }
}
