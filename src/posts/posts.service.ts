import { HttpException, Injectable } from '@nestjs/common';
import { PrismaClient, posts } from '@prisma/client';
import { PostsDto } from './dto/posts.dto';

@Injectable()
export class PostsService {
  prisma = new PrismaClient();
  async getPostsPage(page: number) {
    try {
      let user = await this.prisma.posts.findMany({
        take: 2,
        skip: (page - 1) * 2,
        include: { user: true, comment: true },
      });
      return user;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async getAllPosts() {
    try {
      let allPosts = await this.prisma.posts.findMany({
        include: { user: true, comment: true },
      });
      return allPosts;
    } catch (error) {
      throw new HttpException(error, 500);
    }
  }
  async createPost(id: number, body: PostsDto) {
    try {
      let { title, content, tags } = body;
      let newPost = {
        owner: id,
        title,
        content,
        created_at: new Date(),
        tags,
      };
      let posts = await this.prisma.posts.create({ data: newPost });
      const result = { mess: 'Tạo post thành công', data: posts };
      return result;
    } catch (err) {
      throw new HttpException(err, 500);
    }
  }
  async updatePost(id: number, body: posts, user: any) {
    try {
      let checkPosts = await this.prisma.posts.findFirst({ where: { id: id } });
      let { title, content, tags } = body;
      if (user.id === checkPosts.owner) {
        let newPost = { title, content, tags };
        await this.prisma.posts.update({
          data: newPost,
          where: { id: id },
        });
        return 'Cập nhật post thành công';
      } else {
        return { message: 'Bạn không phải chủ bài posts' };
      }
    } catch (err) {
      throw new HttpException(err, 400);
    }
  }
  async deletePosts(id: number, user: any) {
    try {
      let checkPosts = await this.prisma.posts.findFirst({ where: { id: id } });
      if (checkPosts.owner === user.id) {
        await this.prisma.posts.delete({ where: { id: id } });
        return 'Xóa posts thành công';
      } else {
        return { message: 'Bạn không phải chủ bài posts' };
      }
    } catch (err) {
      throw new HttpException('Post không tồn tại', 400);
    }
  }
}
