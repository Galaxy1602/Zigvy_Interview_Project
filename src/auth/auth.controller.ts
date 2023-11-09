import {
  Body,
  Controller,
  Post,
  Get,
  Req,
  Headers,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { createUser, login } from './dto/auth.dto';
import { Request } from 'express';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/login')
  logIn(@Body() body: login) {
    return this.authService.logIn(body);
  }
  @Post('/register')
  register(@Body() createUser: createUser) {
    return this.authService.register(createUser);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post('/logout')
  logOut(@Req() req: Request, @Headers('token') token) {
    return this.authService.logOut(req.user['data']);
  }
  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt-refresh'))
  @Get('refresh')
  refreshTokens(@Req() req: Request) {
    const data = req.user['data'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(data, refreshToken);
  }
}
