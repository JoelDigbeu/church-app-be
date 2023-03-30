import { UsersFilterOptionsInput } from '@features/users/inputs'

export class GetUsersQuery {
  constructor(public readonly options: UsersFilterOptionsInput) {}
}
