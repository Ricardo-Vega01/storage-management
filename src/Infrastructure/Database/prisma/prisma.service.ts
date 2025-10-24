import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy {
  private static instanceCount = 0;
  private instanceId: number;

  constructor() {
    super();
    PrismaService.instanceCount++;
    this.instanceId = PrismaService.instanceCount;
    console.log(`🔵 PrismaService instance #${this.instanceId} created`);
  }

  async onModuleInit() {
    await this.$connect();
    console.log(`✅ PrismaService instance #${this.instanceId} connected`);
  }

  async onModuleDestroy() {
    await this.$disconnect();
    console.log(`❌ PrismaService instance #${this.instanceId} disconnected`);
  }
}
