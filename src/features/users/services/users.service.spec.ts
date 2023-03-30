import { Test, TestingModule } from '@nestjs/testing'
import { UsersService } from './users.service'
import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { PrismaService } from '@shared/prisma'

const prismaServiceMock =
  mockDeep<PrismaService>() as DeepMockProxy<PrismaService>

describe('UsersService', () => {
  let service: UsersService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaService,
          useValue: prismaServiceMock,
        },
      ],
    }).compile()

    service = module.get<UsersService>(UsersService)
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
