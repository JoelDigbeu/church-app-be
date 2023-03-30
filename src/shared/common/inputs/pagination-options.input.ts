import { IsInt, IsOptional, Min } from 'class-validator'
import { PaginationOptions } from '../interfaces'

export class PaginationOptionsInput implements PaginationOptions {
  @IsInt()
  @IsOptional()
  @Min(0)
  skip?: number

  @IsInt()
  @IsOptional()
  @Min(0)
  take?: number
}
