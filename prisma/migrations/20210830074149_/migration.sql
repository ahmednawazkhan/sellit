/*
  Warnings:

  - Added the required column `nextPaymentAmount` to the `PurchaseBill` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "PurchaseBill" ADD COLUMN     "nextPaymentAmount" INTEGER NOT NULL,
ADD COLUMN     "nextPaymentDate" TIMESTAMP(3);
