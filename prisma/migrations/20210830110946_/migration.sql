/*
  Warnings:

  - Made the column `nextPaymentDate` on table `PurchaseBill` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "PurchaseBill" ALTER COLUMN "nextPaymentDate" SET NOT NULL;
