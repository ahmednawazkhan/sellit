import { PrismaClient } from '@prisma/client';
import * as dotenv from 'dotenv';
import { tireInventory } from './seed/inventory/tire';

const prisma = new PrismaClient();
async function main() {
  // TODO: find if this is wokring / useful
  dotenv.config();
  console.log('Seeding...');

  // This creates
  // Tire Inventory
  // item files
  // purchase bills
  // vendors
  for (const inventoryItem of tireInventory) {
    await prisma.tireInventory.create(inventoryItem);
  }

  console.log('seeding complete...');
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
