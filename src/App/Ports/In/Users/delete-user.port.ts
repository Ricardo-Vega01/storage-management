import { User } from "@Entities/Users/user.entity";

export interface DeleteUserPort {
  execute(id: string): Promise<User>;
}
