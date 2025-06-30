import { IsNotEmpty } from 'class-validator';

export class CreateAuthDto {
  @IsNotEmpty({ message: 'Username không đuọc để trống' })
  username: string;
  @IsNotEmpty({ message: 'Password không đuọc để trống' })
  password: string;
}
