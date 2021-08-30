-- AlterTable
ALTER TABLE "PurchaseBill" ALTER COLUMN "nextPaymentAmount" DROP NOT NULL,
ALTER COLUMN "nextPaymentDate" DROP NOT NULL;
