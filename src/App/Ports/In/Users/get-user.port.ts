import  { User } from "@Entities/Users/user.entity.js";

export interface GetUserPort {
  execute(id: string): Promise<User | null>;
}
