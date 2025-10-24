import  { User } from "@Entities/Users/user.entity";
import { Inject, Injectable } from "@nestjs/common";
import type { UpadateUserPort } from "@Ports/In/Users/update-user.port";
import type { UserRepository } from "@Ports/Out/user-repo.port";

@Injectable()
export class UpdateUserCase implements UpadateUserPort {
  constructor(@Inject("UserRepository") private readonly repo: UserRepository) {}
  
  async execute(id: string, name: string, email: string): Promise<User> {
    const user = await this.repo.findById(id);
    if (!user) throw new Error("User not found");
    user.update(name, email);
    return await this.repo.update(id, user);
  }
}
