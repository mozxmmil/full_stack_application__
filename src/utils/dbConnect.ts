import { PrismaClient } from "@prisma/client";

// 👇 Tell TypeScript that globalThis can have a `prisma` property
declare global {
  let prisma: PrismaClient | undefined;
}

const globalForPrisma = globalThis as typeof globalThis & {
  prisma: PrismaClient;
};

export const prismaClient = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prismaClient;
