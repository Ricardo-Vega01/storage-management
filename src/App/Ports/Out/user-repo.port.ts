import { User } from "@Entities/Users/user.entity";

export interface UserRepository {
  create(user: Partial<User>): Promise<User>;
  findById(id: string): Promise<User | null>;
  update(id: string, user: Partial<User>): Promise<User>;
  delete(id: string): Promise<void>;
  findAll(): Promise<User[]>;
}

