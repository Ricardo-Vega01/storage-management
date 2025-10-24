import type { CreateUserDto } from "@Dtos//user.dtos";
import { User } from "@Entities/Users/user.entity";
import { Inject, Injectable } from "@nestjs/common";
import type { CreateUserPort } from "@Ports/In/Users/create-user.port";
import type { UserRepository } from "@Ports/Out/user-repo.port";
import { uuid } from "uuidv4";

@Injectable()
export class CreateUserCase implements CreateUserPort {
  constructor(@Inject("UserRepository") private readonly repo: UserRepository) {}

  async execute(name: string, email: string): Promise<User> {
    const user: CreateUserDto = {
      id: uuid(),
      name,
      email,
    };
    return await this.repo.create(user);
  }
}
