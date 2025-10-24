import  { User } from "@Entities/Users/user.entity";
import { Inject, Injectable } from "@nestjs/common";
import type { DeleteUserPort } from "@Ports/In/Users/delete-user.port";
import type { UserRepository } from "@Ports/Out/user-repo.port";

@Injectable()
export class DeleteUserCase implements DeleteUserPort {
  constructor(@Inject("UserRepository") private readonly repo: UserRepository) {}
  async execute(id: string): Promise<User> {
    const user = await this.repo.findById(id);
    if (!user) throw new Error("User not found");
    await this.repo.delete(id);
    return user;
  }
}
