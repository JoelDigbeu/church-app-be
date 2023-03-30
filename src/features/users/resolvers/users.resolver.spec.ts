import { Test, TestingModule } from '@nestjs/testing'
import { UsersResolver } from './users.resolver'
import { DeepMockProxy, mockDeep } from 'jest-mock-extended'
import { QueryBus } from '@nestjs/cqrs'

const queryBusMock = mockDeep<QueryBus>() as DeepMockProxy<QueryBus>

describe('UsersResolver', () => {
  let resolver: UsersResolver

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: QueryBus,
          useValue: queryBusMock,
        },
      ],
    }).compile()

    resolver = module.get<UsersResolver>(UsersResolver)
  })

  it('should be defined', () => {
    expect(resolver).toBeDefined()
  })
})
