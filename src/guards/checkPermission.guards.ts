import { HttpException } from '@nestjs/common';

export class Permission {
  static check(id: number, user: any) {
    if (id === user.id) return;
    throw new HttpException('User can not perform action', 400);
  }
}
