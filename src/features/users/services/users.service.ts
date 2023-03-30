import { Injectable } from '@nestjs/common'
import { PrismaService } from '@shared/prisma'

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}
}
