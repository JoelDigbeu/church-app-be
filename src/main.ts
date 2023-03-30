import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { PrismaService } from '@shared/prisma'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)

  const prismaService = app.get<PrismaService>(PrismaService)
  await prismaService.appShutdownHooks(app)

  await app.listen(3000)
}
bootstrap()
