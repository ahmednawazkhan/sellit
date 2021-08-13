-- CreateEnum
CREATE TYPE "TireBrand" AS ENUM ('BRIDGESTONE', 'MICHELIN', 'DUNLOP', 'SERVICE', 'YOKOHAMA');

-- CreateEnum
CREATE TYPE "TireSize" AS ENUM ('ONESEVENFIVE_SEVENTY', 'ONEEIGHTFIVE_EIGHTYFIVE');

-- CreateEnum
CREATE TYPE "TirePattern" AS ENUM ('CAMBER', 'CUP');

-- CreateEnum
CREATE TYPE "TireMade" AS ENUM ('PAKISTAN', 'JAPAN', 'INDONESIA');

-- CreateTable
CREATE TABLE "TireItemFile" (
    "id" TEXT NOT NULL,
    "brand" "TireBrand" NOT NULL,
    "size" "TireSize" NOT NULL,
    "pattern" "TirePattern" NOT NULL,
    "dateOfManufacture" TIMESTAMP(3) NOT NULL,
    "made" "TireMade" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    PRIMARY KEY ("id")
);
