import { Injectable, HttpException } from '@nestjs/common';
import {
  UpdateUserDto,
  changePasswordDto,
  getUserDto,
} from './dto/create-user.dto';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { Permission } from 'src/guards/checkPermission.guards';
@Injectable()
export class UserService {
  prisma = new PrismaClient();
  async getUser(body: getUserDto) {
    let { username, password } = body;
    let user = await this.prisma.user.findFirst({ where: { username } });
    if (bcrypt.compareSync(password, user.password)) {
      return user;
    } else {
      return (user = null);
    }
  }
  async getUserPage(page: number) {
    try {
      let user = await this.prisma.user.findMany({
        take: 2,
        skip: (page - 1) * 2,
      });
      return user;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async updateUser(id: number, updateUser: UpdateUserDto, user: any) {
    Permission.check(id, user);
    let { name, dob } = updateUser;
    let newUser = { name, dob };
    await this.prisma.user.update({
      data: newUser,
      where: { id: id },
    });
    return 'Cập nhật thông tin thành công';
  }
  async changePassword(
    changePassword: changePasswordDto,
    id: number,
    user: any,
  ) {
    try {
      Permission.check(id, user);
      let { password } = changePassword;
      let newUser = {
        password: bcrypt.hashSync(password, 10),
      };
      await this.prisma.user.update({
        data: newUser,
        where: { id: id },
      });
      return 'Thay đổi mật khẩu thành công';
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
}
