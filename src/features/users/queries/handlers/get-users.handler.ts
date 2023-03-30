import { IQueryHandler, QueryHandler } from '@nestjs/cqrs'
import { GetUsersQuery } from '../contracts'

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  async execute(query: GetUsersQuery): Promise<any> {
    const { options } = query

    return {
      data: [],
      pagination: {
        ...options,
      },
    }
  }
}
