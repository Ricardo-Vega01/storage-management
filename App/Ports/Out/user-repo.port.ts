import type { User } from "@Entity/Users/user.entity.js";

export interface CreateUserPort {
    create(user: Partial<User>): Promise<User>;
}

export interface FindUserPort {
    findById(id: string): Promise<User | null>;
}

export interface UpdateUserPort {
    update(id: string, user: Partial<User>): Promise<User>;
}

export interface DeleteUserPort {
    delete(id: string): Promise<void>;
}

export interface ListUsersPort {
    findAll(): Promise<User[]>;
}
