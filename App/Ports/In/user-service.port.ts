import type { User } from "@Entity/Users/user.entity.js";

export interface UserServicePort {
    createUser(user: Partial<User>): Promise<User>;
    getUserById(id: string): Promise<User | null>;
    updateUser(id: string, user: Partial<User>): Promise<User>;
    deleteUser(id: string): Promise<void>;
    listUsers(): Promise<User[]>;
}
