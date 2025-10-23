import {
  Injectable,
  type OnModuleDestroy,
  type OnModuleInit,
} from "@nestjs/common";
import { PrismaClient } from "@prisma/client";

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    try {
      await this.$connect();
      console.log("Connected to Prisma");
    } catch (error) {
      console.error("Failed to connect to Prisma:", error);
    }
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log("Disconnected from Prisma");
  }
}
