import { User } from "@Entities/Users/user.entity.js";

export interface DeleteUserPort {
  execute(id: string): Promise<User>;
}
