import { PrismaService } from "@Database/prisma/prisma.service.js";
import type { CreateUserDto } from "@Dtos//user.dtos.js";
import { User } from "@Entities/Users/user.entity.js";
import { Injectable } from "@nestjs/common";
import type { UserRepository } from "@Ports/Out/user-repo.port.js";

@Injectable()
export class PrismaUserRepo implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(user: CreateUserDto): Promise<User> {
    const created = await this.prisma.user.create({
      data: {
        ...(user.id && { id: user.id }),
        name: user.name!,
        email: user.email!,
        passwordHash: "", // manejar en otro caso de uso
      },
    });
    return new User(created.id, created.name, created.email);
  }

  async findById(id: string): Promise<User | null> {
    const found = await this.prisma.user.findUnique({ where: { id } });
    return found ? new User(found.id, found.name, found.email) : null;
  }

  async update(id: string, user: User): Promise<User> {
    const updated = await this.prisma.user.update({
      where: { id },
      data: {
        ...(user.name && { name: user.name }),
        ...(user.email && { email: user.email }),
      },
    });
    return new User(updated.id, updated.name, updated.email);
  }

  async delete(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id } });
  }

  async findAll(): Promise<User[]> {
    try {
      console.log("Fetching users from the database...");
      const users = await this.prisma.user.findMany();
      console.log("Fetched users:", users);

      return users.map((u) => new User(u.id, u.name, u.email));
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }
}
