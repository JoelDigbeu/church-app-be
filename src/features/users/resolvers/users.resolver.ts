import { QueryBus } from '@nestjs/cqrs'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GetUsersQuery } from '../queries/contracts'
import { Observable, from } from 'rxjs'
import { PaginatedListResponse } from '@shared/common/interfaces'
import { User } from '@prisma/client'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query('getMembers')
  getMembers(
    @Args('options') options: any,
  ): Observable<PaginatedListResponse<User>> {
    return from(this.queryBus.execute(new GetUsersQuery(options)))
  }
}
