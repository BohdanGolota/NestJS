import { IsOptional, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterNewsDto {
  @IsOptional()
  @IsString()
  searchTerm?: string;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  publishedBefore?: Date;

  @IsOptional()
  @Type(() => Date)
  @IsDate()
  publishedAfter?: Date;
}
