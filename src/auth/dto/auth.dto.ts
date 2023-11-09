import { ApiProperty } from '@nestjs/swagger';
export class login {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
}
export class createUser {
  @ApiProperty()
  username: string;
  @ApiProperty()
  password: string;
  @ApiProperty()
  name: string;
  @ApiProperty()
  dob: string;
}
