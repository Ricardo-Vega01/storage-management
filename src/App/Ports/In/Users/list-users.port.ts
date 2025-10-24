import  { User } from "@Entities/Users/user.entity";

export interface ListUsersPort {
  execute(): Promise<User[]>;
}
