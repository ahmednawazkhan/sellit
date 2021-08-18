-- CreateEnum
CREATE TYPE "VendorType" AS ENUM ('LOCAL', 'IMPORT');

-- CreateTable
CREATE TABLE "PurchaseBill" (
    "id" TEXT NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "advancePaid" INTEGER NOT NULL,
    "tireQuantity" INTEGER NOT NULL,
    "costPaid" INTEGER NOT NULL,
    "vendor_id" TEXT NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "type" "VendorType" NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Tire" (
    "id" TEXT NOT NULL,
    "itemFileId" TEXT NOT NULL,
    "dateOfManufacture" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sellingPrice" INTEGER NOT NULL,
    "purchasePrice" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "itemFile_dateOfManufacture" ON "Tire"("itemFileId", "dateOfManufacture");

-- AddForeignKey
ALTER TABLE "PurchaseBill" ADD FOREIGN KEY ("vendor_id") REFERENCES "Vendor"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Tire" ADD FOREIGN KEY ("itemFileId") REFERENCES "TireItemFile"("id") ON DELETE CASCADE ON UPDATE CASCADE;
