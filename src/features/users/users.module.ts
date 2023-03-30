import { Module } from '@nestjs/common'
import { UsersService } from './services'
import { UsersResolver } from './resolvers'
import { QUERY_HANDLERS } from './queries'
import { COMMAND_HANDLERS } from './commands'
import { CqrsModule } from '@nestjs/cqrs'

@Module({
  imports: [CqrsModule],
  providers: [
    UsersResolver,
    UsersService,
    ...COMMAND_HANDLERS,
    ...QUERY_HANDLERS,
  ],
  exports: [UsersService],
})
export class UsersModule {}
