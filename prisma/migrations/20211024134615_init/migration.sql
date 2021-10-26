-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'USER');

-- CreateEnum
CREATE TYPE "TireBrand" AS ENUM ('BRIDGESTONE', 'MICHELIN', 'DUNLOP', 'SERVICE', 'YOKOHAMA');

-- CreateEnum
CREATE TYPE "TireSize" AS ENUM ('ONESEVENFIVE_SEVENTY', 'ONEEIGHTFIVE_EIGHTYFIVE');

-- CreateEnum
CREATE TYPE "TirePattern" AS ENUM ('CAMBER', 'CUP');

-- CreateEnum
CREATE TYPE "TireMade" AS ENUM ('PAKISTAN', 'JAPAN', 'INDONESIA');

-- CreateEnum
CREATE TYPE "VendorType" AS ENUM ('LOCAL', 'IMPORT');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "firstname" TEXT,
    "lastname" TEXT,
    "role" "Role" NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Post" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "published" BOOLEAN NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT,
    "authorId" TEXT,

    CONSTRAINT "Post_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TireItemFile" (
    "id" TEXT NOT NULL,
    "brand" "TireBrand" NOT NULL,
    "size" "TireSize" NOT NULL,
    "pattern" "TirePattern" NOT NULL,
    "made" "TireMade" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TireItemFile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PurchaseBill" (
    "id" TEXT NOT NULL,
    "totalCost" INTEGER NOT NULL,
    "advancePaid" INTEGER,
    "tireQuantity" INTEGER NOT NULL,
    "costPaid" INTEGER NOT NULL,
    "vendorId" TEXT NOT NULL,
    "nextPaymentDate" TIMESTAMP(3),
    "nextPaymentAmount" INTEGER,
    "billDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PurchaseBill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Vendor" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(30) NOT NULL,
    "description" VARCHAR(100),
    "type" "VendorType" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Vendor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TireInventory" (
    "id" TEXT NOT NULL,
    "itemFileId" TEXT NOT NULL,
    "dateOfManufacture" TIMESTAMP(3) NOT NULL,
    "quantity" INTEGER NOT NULL,
    "sellingPrice" INTEGER NOT NULL,
    "averageSellingPrice" INTEGER NOT NULL,
    "purchasePrice" INTEGER NOT NULL,
    "purchaseId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TireInventory_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "TireItemFile_brand_size_pattern_made_key" ON "TireItemFile"("brand", "size", "pattern", "made");

-- CreateIndex
CREATE UNIQUE INDEX "Vendor_name_type_key" ON "Vendor"("name", "type");

-- CreateIndex
CREATE UNIQUE INDEX "TireInventory_itemFileId_dateOfManufacture_key" ON "TireInventory"("itemFileId", "dateOfManufacture");

-- AddForeignKey
ALTER TABLE "Post" ADD CONSTRAINT "Post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PurchaseBill" ADD CONSTRAINT "PurchaseBill_vendorId_fkey" FOREIGN KEY ("vendorId") REFERENCES "Vendor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TireInventory" ADD CONSTRAINT "TireInventory_itemFileId_fkey" FOREIGN KEY ("itemFileId") REFERENCES "TireItemFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TireInventory" ADD CONSTRAINT "TireInventory_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "PurchaseBill"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
