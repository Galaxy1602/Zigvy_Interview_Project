import { HttpException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { createUser } from './dto/auth.dto';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}
  prisma = new PrismaClient();
  async register(createUser: createUser) {
    try {
      let { username, password, name, dob } = createUser;
      let checkUser = await this.prisma.user.findMany({
        where: { username },
      });
      if (checkUser.length > 0) {
        return 'Username đã tồn tại';
      } else {
        let newUser = {
          username,
          password: bcrypt.hashSync(password, 10),
          name,
          dob,
          created_at: new Date(),
        };
        await this.prisma.user.create({ data: newUser });
        return 'Đăng ký thành công';
      }
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
  async logIn({ username, password }) {
    let checkUser = await this.prisma.user.findFirst({
      where: { username },
    });
    let data = {
      id: checkUser.id,
      username: checkUser.username,
      name: checkUser.name,
      dob: checkUser.dob,
    };
    if (checkUser) {
      if (bcrypt.compareSync(password, checkUser.password)) {
        const tokens = await this.getTokens(data);
        let newCheckUser = {
          ...checkUser,
          refeshToken: tokens.refreshToken,
        };
        await this.prisma.user.update({
          data: newCheckUser,
          where: { id: newCheckUser.id },
        });
        return tokens;
      } else throw new HttpException('Mật khẩu không đúng!', 400);
    } else {
      throw new HttpException('username không tồn tại!', 400);
    }
  }
  async logOut(data) {
    let newUser = { refeshToken: null };
    try {
      await this.prisma.user.update({
        data: newUser,
        where: { id: data.id },
      });
      return 'Logout Thành Công';
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
  async getTokens(data: any) {
    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(
        {
          data,
        },
        {
          secret: this.configService.get('KEY'),
          expiresIn: '15m',
        },
      ),
      this.jwtService.signAsync(
        {
          data,
        },
        {
          secret: this.configService.get('KEY'),
          expiresIn: '7d',
        },
      ),
    ]);

    return {
      accessToken,
      refreshToken,
    };
  }
  async refreshTokens(data: any, refreshToken: string) {
    let { username } = data;
    const user = await this.prisma.user.findFirst({ where: { username } });
    if (!user || !user.refeshToken)
      throw new HttpException('Access Denied', 500);
    if (refreshToken != user.refeshToken)
      throw new HttpException('Access Denied', 500);
    const tokens = await this.getTokens(data);
    let newUser = { refeshToken: tokens.refreshToken };
    await this.prisma.user.update({
      data: newUser,
      where: { id: data.id },
    });
    return tokens;
  }
}
