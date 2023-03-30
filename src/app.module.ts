import { AppController } from './app.controller'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import {
  configModuleConfiguration,
  graphqlModuleConfiguration,
} from './configurations'

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfiguration),
    GraphQLModule.forRoot(graphqlModuleConfiguration),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
