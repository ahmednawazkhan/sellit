import { TireItemFile } from '@prisma/client';

export type CreateItemFileDto = Omit<TireItemFile, "id" | "createdAt" | "updatedAt">
