import { User } from "@Entities/Users/user.entity";

export interface CreateUserPort {
  execute(name: string, email: string): Promise<User>;
}
