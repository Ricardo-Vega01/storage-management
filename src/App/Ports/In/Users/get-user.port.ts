import  { User } from "@Entities/Users/user.entity";

export interface GetUserPort {
  execute(id: string): Promise<User | null>;
}
