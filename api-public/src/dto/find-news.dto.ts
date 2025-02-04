import { IsNotEmpty, IsNumberString } from 'class-validator';

export class FindNewsDto {
  @IsNumberString()
  @IsNotEmpty()
  id: number;
}
