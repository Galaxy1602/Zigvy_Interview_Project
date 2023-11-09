import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient, comment } from '@prisma/client';

@Injectable()
export class CommentsService {
  prisma = new PrismaClient();
  async addComments(id: number, body: comment, user: any) {
    try {
      let { content } = body;
      let newComments = {
        owner: user.id,
        post: id,
        content,
        created_at: new Date(),
      };
      let comment = await this.prisma.comment.create({ data: newComments });
      const result = { mess: 'Comment thành công', data: comment };
      return result;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async getCommentsByPostsId(id: number) {
    try {
      let posts = await this.prisma.comment.findMany({
        where: { post: id },
        include: { user: true },
      });
      return posts;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
}
