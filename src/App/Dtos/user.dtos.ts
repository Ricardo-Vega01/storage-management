export interface CreateUserDto {
    id: string,
    name: string,
    email: string
};

export interface UpdateUserDto {
    name?: string,
    email?: string
};