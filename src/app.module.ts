import { AppController } from './app.controller'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import {
  configModuleConfiguration,
  graphqlModuleConfiguration,
} from './configurations'
import { UsersModule } from './features/users/users.module';
import { PrismaModule } from './shared/prisma/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot(configModuleConfiguration),
    GraphQLModule.forRoot(graphqlModuleConfiguration),
    UsersModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
