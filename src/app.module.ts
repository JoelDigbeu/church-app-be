import { AppController } from './app.controller'
import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { ConfigModule } from '@nestjs/config'
import { NODE_ENV } from './shared'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath:
        process.env.NODE_ENV === NODE_ENV.PRODUCTION
          ? '.env'
          : `.env.${process.env.NODE_ENV}`,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
