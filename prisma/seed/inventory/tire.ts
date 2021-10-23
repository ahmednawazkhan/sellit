import { Prisma } from '@prisma/client';
import { tireItemData } from '../itemFile';
import { purchaseBillData } from '../purchaseBill';

export const tireInventory: Prisma.TireInventoryCreateArgs[] = [
  {
    data: {
      itemFile: {
        create: tireItemData[0],
      },
      quantity: 100,
      dateOfManufacture: new Date('2019-02-24'),
      sellingPrice: 150,
      averageSellingPrice: 100,
      purchasePrice: 90,
      purchaseBill: {
        create: purchaseBillData[0],
      },
    },
    include: {
      purchaseBill: true,
    },
  },
  {
    data: {
      itemFile: {
        create: tireItemData[2],
      },
      quantity: 50,
      dateOfManufacture: new Date('2021-01-18'),
      sellingPrice: 500,
      averageSellingPrice: 480,
      purchasePrice: 360,
      purchaseBill: {
        create: purchaseBillData[3],
      },
    },
  },
  {
    data: {
      itemFile: {
        connect: {
          brand_size_pattern_made: {
            brand: tireItemData[0].brand,
            size: tireItemData[0].size,
            pattern: tireItemData[0].pattern,
            made: tireItemData[0].made,
          },
        },
      },
      quantity: 100,
      dateOfManufacture: new Date('2018-12-21'),
      sellingPrice: 80,
      averageSellingPrice: 90,
      purchasePrice: 30,
      purchaseBill: {
        create: purchaseBillData[2],
      },
    },
    include: {
      purchaseBill: true,
    },
  },
  {
    data: {
      itemFile: {
        create: tireItemData[1],
      },
      quantity: 1000,
      dateOfManufacture: new Date('2020-02-24'),
      sellingPrice: 300,
      averageSellingPrice: 20,
      purchasePrice: 200,
      purchaseBill: {
        create: purchaseBillData[1],
      },
    },
    include: {
      purchaseBill: true,
    },
  },
  {
    data: {
      itemFile: {
        connect: {
          brand_size_pattern_made: {
            brand: tireItemData[1].brand,
            size: tireItemData[1].size,
            pattern: tireItemData[1].pattern,
            made: tireItemData[1].made,
          },
        },
      },
      quantity: 150,
      dateOfManufacture: new Date('2021-08-02'),
      sellingPrice: 900,
      averageSellingPrice: 780,
      purchasePrice: 560,
      purchaseBill: {
        create: purchaseBillData[4],
      },
    },
  },
];
