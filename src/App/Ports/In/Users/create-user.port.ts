import { User } from "@Entities/Users/user.entity.js";

export interface CreateUserPort {
  execute(name: string, email: string): Promise<User>;
}
