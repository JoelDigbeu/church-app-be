import { AppController } from './app.controller'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import {
  getConfigModuleConfiguration,
  getGraphqlModuleConfiguration,
} from './configurations'
import { UsersModule } from '@features/users'
import { PrismaModule } from '@shared/prisma'

@Module({
  imports: [
    ConfigModule.forRoot(getConfigModuleConfiguration()),
    GraphQLModule.forRoot(
      getGraphqlModuleConfiguration({
        showPlayground: process.env.SHOW_GRAPHQL_PLAYGROUND === 'true',
      }),
    ),
    UsersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
