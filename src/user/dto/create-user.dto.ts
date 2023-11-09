import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  dob: string;
}
export class UpdateRoleUserDto {
  @ApiProperty()
  role: string;
}
export class UpdateLockUserDto {
  @ApiProperty()
  isLock: boolean;
}
export class changePasswordDto {
  @ApiProperty()
  password: string;
}
export class resetPasswordDto {
  @ApiProperty()
  otp: string;
  Password: string;
}
export class getUserDto {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: String;
}
