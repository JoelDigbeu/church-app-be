import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from '@shared/prisma'
import { INestApplication } from '@nestjs/common'

function setupMiddlewares(app: INestApplication) {
  app.enableCors({
    origin: '*',
    credentials: true,
  })
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const prismaService = app.get<PrismaService>(PrismaService)
  await prismaService.appShutdownHooks(app)

  setupMiddlewares(app)

  await app.listen(3000)
}
bootstrap()
