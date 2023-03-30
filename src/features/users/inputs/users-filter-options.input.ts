import { PaginationOptionsInput } from '@shared/common/inputs'
import { Type } from 'class-transformer'
import { IsOptional, IsString, ValidateNested } from 'class-validator'

export class UsersFilterOptionsInput {
  @IsOptional()
  @IsString()
  query?: string

  @IsOptional()
  @ValidateNested()
  @Type(() => PaginationOptionsInput)
  pagination?: PaginationOptionsInput
}
