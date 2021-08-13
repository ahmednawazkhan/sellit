/*
  Warnings:

  - You are about to drop the column `dateOfManufacture` on the `TireItemFile` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[brand,size,pattern,made]` on the table `TireItemFile` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "TireItemFile" DROP COLUMN "dateOfManufacture";

-- CreateIndex
CREATE UNIQUE INDEX "brand_size_pattern_made" ON "TireItemFile"("brand", "size", "pattern", "made");
