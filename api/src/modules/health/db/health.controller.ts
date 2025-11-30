//ping using Prisma to test Supabase connection
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Controller('health')
export class HealthController {
  constructor(private readonly prisma: PrismaService) {}

  @Get('db')
  async checkDb() {
    await this.prisma.$queryRaw`SELECT 1`;
    return { ok: true };
  }
}
