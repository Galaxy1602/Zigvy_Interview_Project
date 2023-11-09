import {
  Body,
  Controller,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
  Delete,
  Get,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsDto } from './dto/posts.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { posts } from '@prisma/client';
import { Request } from 'express';

@ApiTags('Posts')
@ApiBearerAuth()
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get('get-posts-page/:page')
  getPostsPage(@Param('page') page: string) {
    return this.postsService.getPostsPage(+page);
  }
  @Get('all-posts')
  getAllPosts() {
    return this.postsService.getAllPosts();
  }
  @Post('create-posts/:userId')
  createPost(@Param('userId') id: number, @Body() body: PostsDto) {
    return this.postsService.createPost(+id, body);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put('update-posts/:postsId')
  updatePost(
    @Param('postsId') id: string,
    @Body() body: posts,
    @Req() req: Request,
  ) {
    return this.postsService.updatePost(+id, body, req.user['data']);
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete('remove-post/:postsId')
  deletePosts(@Param('postsId') id: string, @Req() req: Request) {
    return this.postsService.deletePosts(+id, req.user['data']);
  }
}
