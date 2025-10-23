import  { User } from "@Entities/Users/user.entity.js";

export interface ListUsersPort {
  execute(): Promise<User[]>;
}
