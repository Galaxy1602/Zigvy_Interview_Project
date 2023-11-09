import {
  Controller,
  Post,
  Param,
  UseGuards,
  Req,
  Body,
  Get,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { comment } from '@prisma/client';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('Comments')
@ApiBearerAuth()
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}
  @UseGuards(AuthGuard('jwt'))
  @Post('add-comments/:postsId')
  addComments(
    @Param('postsId') id: string,
    @Body() body: comment,
    @Req() req: Request,
  ) {
    return this.commentsService.addComments(+id, body, req.user['data']);
  }
  @Get('get-comments-by-postsId/:postsId')
  getCommentsByPostsId(@Param('postsId') id: string) {
    return this.commentsService.getCommentsByPostsId(+id);
  }
}
