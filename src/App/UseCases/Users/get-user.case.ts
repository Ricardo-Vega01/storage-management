import  { User } from "@Entities/Users/user.entity.js";
import { Inject, Injectable } from "@nestjs/common";
import type { GetUserPort } from "@Ports/In/Users/get-user.port.js";
import type { UserRepository } from "@Ports/Out/user-repo.port.js";

Injectable()
export class FindUserCase implements GetUserPort {
  constructor(@Inject("UserRepository") private readonly repo: UserRepository) {}

  async execute(id: string): Promise<User | null> {
    return this.repo.findById(id);
  }
}
