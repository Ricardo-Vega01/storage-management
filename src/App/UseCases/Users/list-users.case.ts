import { Inject, Injectable } from "@nestjs/common";
import { User } from "@Entities/Users/user.entity.js";
import type { ListUsersPort } from "@Ports/In/Users/list-users.port.js";
import type { UserRepository } from "@Ports/Out/user-repo.port.js";


@Injectable()
export class ListUsersCase implements ListUsersPort{
  constructor(@Inject('UserRepository') private readonly repo: UserRepository) {}

  async execute(): Promise<User[]> {
    try {
      return await this.repo.findAll();
    } catch (error) {
      console.error('Error executing ListUseCase: ', error);
      throw new Error('Failed to fetch users');
    }
  }
}

