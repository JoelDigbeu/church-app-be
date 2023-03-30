import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { GetUsersQuery } from '../contracts'
import { PaginatedListResponse } from '@shared/common/interfaces'
import { User } from '@prisma/client'

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  async execute(query: GetUsersQuery): Promise<PaginatedListResponse<User>> {
    const { options } = query

    return {
      data: [],
      pagination: {
        ...options.pagination,
      },
    }
  }
}
