import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  UseGuards,
  Put,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import {
  UpdateUserDto,
  changePasswordDto,
  getUserDto,
} from './dto/create-user.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('get-user')
  getUser(@Body() body: getUserDto) {
    return this.userService.getUser(body);
  }
  @Get('get-user-page/:page')
  getUserPage(@Param('page') page: string) {
    return this.userService.getUserPage(+page);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put('update/:id')
  updateUser(
    @Param('id') id: string,
    @Body() updateUser: UpdateUserDto,
    @Req() req: Request,
  ) {
    return this.userService.updateUser(+id, updateUser, req.user['data']);
  }
  @UseGuards(AuthGuard('jwt'))
  @Put('change-password/:id')
  changePassword(
    @Param('id') id: string,
    @Body() body: changePasswordDto,
    @Req() req: Request,
  ) {
    return this.userService.changePassword(body, +id, req.user['data']);
  }
}
