import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class updateUser {
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  username?: string;
  @IsString()
  @IsOptional()
  @IsNotEmpty()
  email?: string;
  @IsOptional()
  password?: boolean;
}
