/*
  Warnings:

  - You are about to drop the column `amount` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the `Buys` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Buys" DROP CONSTRAINT "Buys_userId_fkey";

-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "amount",
DROP COLUMN "productId";

-- DropTable
DROP TABLE "Buys";

-- CreateTable
CREATE TABLE "Historical" (
    "id" TEXT NOT NULL,

    CONSTRAINT "Historical_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cart_products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Cart_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historical_products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "historicalId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "Historical_products_pkey" PRIMARY KEY ("id")
);
