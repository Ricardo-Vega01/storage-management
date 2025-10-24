import { User } from "@Entities/Users/user.entity";

export interface UpadateUserPort {
  execute(id: string, name: string, email: string): Promise<User>;
}
