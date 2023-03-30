import { PaginationOptions } from './pagination-options.interface'

export interface PaginatedListResponse<T> {
  data: T[]
  pagination: {
    toal?: number
  } & PaginationOptions
}
