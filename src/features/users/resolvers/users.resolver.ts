import { QueryBus } from '@nestjs/cqrs'
import { Args, Query, Resolver } from '@nestjs/graphql'
import { GetUsersQuery } from '../queries/contracts'
import { from } from 'rxjs'

@Resolver('User')
export class UsersResolver {
  constructor(private readonly queryBus: QueryBus) {}

  @Query('getUsers')
  getUsers(@Args('options') options: any) {
    return from(this.queryBus.execute(new GetUsersQuery(options)))
  }
}
