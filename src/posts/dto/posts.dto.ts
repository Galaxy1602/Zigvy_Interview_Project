import { ApiProperty } from '@nestjs/swagger';

export class PostsDto {
  @ApiProperty()
  owner: number;
  @ApiProperty()
  title: string;
  @ApiProperty()
  content: string;
  @ApiProperty()
  tags: string;
}
