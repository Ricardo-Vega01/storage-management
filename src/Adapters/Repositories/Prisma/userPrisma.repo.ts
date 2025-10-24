import { PrismaService } from "@Database/prisma/prisma.service";
import type { CreateUserDto } from "@Dtos//user.dtos";
import { User } from "@Entities/Users/user.entity";
import { Injectable } from "@nestjs/common";
import type { UserRepository } from "@Ports/Out/user-repo.port";

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

  async findById(id: string): Promise<any | null> {
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
      console.log("¿prisma está definido?", !!this.prisma);
      console.log("¿prisma.user está definido?", !!this.prisma?.user);

      if (!this.prisma) {
        throw new Error("PrismaService is not injected");
      }

      const users = await this.prisma.user.findMany();
      console.log("✅ Users fetched:", users.length);
      return users.map(u => new User(u.id, u.name, u.email));
    } catch (error) {
      console.error("Error fetching users:", error);
      throw new Error("Failed to fetch users");
    }
  }
}
