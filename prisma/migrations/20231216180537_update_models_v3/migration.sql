/*
  Warnings:

  - You are about to drop the `Cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Cart_products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Historical_products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Cart_products" DROP CONSTRAINT "Cart_products_cartId_fkey";

-- DropForeignKey
ALTER TABLE "Historical_products" DROP CONSTRAINT "Historical_products_historicalId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_cartId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_historicalId_fkey";

-- DropTable
DROP TABLE "Cart";

-- DropTable
DROP TABLE "Cart_products";

-- DropTable
DROP TABLE "Historical_products";

-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT,
    "password" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "image" TEXT,
    "cartId" TEXT NOT NULL,
    "historicalId" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "carts" (
    "id" TEXT NOT NULL,
    "isEmpty" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "carts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_products" (
    "id" TEXT NOT NULL,
    "productId" TEXT NOT NULL,
    "cartId" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,

    CONSTRAINT "cart_products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "historical_products" (
    "id" TEXT NOT NULL,
    "orderBuyId" TEXT NOT NULL,
    "historicalId" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "historical_products_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cartId_key" ON "users"("cartId");

-- CreateIndex
CREATE UNIQUE INDEX "users_historicalId_key" ON "users"("historicalId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "Historical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historical_products" ADD CONSTRAINT "historical_products_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "Historical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
