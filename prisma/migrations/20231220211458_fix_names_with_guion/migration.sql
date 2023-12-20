/*
  Warnings:

  - You are about to drop the column `cartId` on the `cart_products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `cart_products` table. All the data in the column will be lost.
  - You are about to drop the column `historicalId` on the `historical_products` table. All the data in the column will be lost.
  - You are about to drop the column `orderBuyId` on the `historical_products` table. All the data in the column will be lost.
  - You are about to drop the column `cartId` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `historicalId` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[cart_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[historical_id]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cart_id` to the `cart_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `product_id` to the `cart_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historica_id` to the `historical_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_buy_id` to the `historical_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cart_id` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historical_id` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "cart_products" DROP CONSTRAINT "cart_products_cartId_fkey";

-- DropForeignKey
ALTER TABLE "historical_products" DROP CONSTRAINT "historical_products_historicalId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_cartId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_historicalId_fkey";

-- DropIndex
DROP INDEX "users_cartId_key";

-- DropIndex
DROP INDEX "users_historicalId_key";

-- AlterTable
ALTER TABLE "cart_products" DROP COLUMN "cartId",
DROP COLUMN "productId",
ADD COLUMN     "cart_id" TEXT NOT NULL,
ADD COLUMN     "product_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "historical_products" DROP COLUMN "historicalId",
DROP COLUMN "orderBuyId",
ADD COLUMN     "historica_id" TEXT NOT NULL,
ADD COLUMN     "order_buy_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "cartId",
DROP COLUMN "historicalId",
ADD COLUMN     "cart_id" TEXT NOT NULL,
ADD COLUMN     "historical_id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_cart_id_key" ON "users"("cart_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_historical_id_key" ON "users"("historical_id");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_historical_id_fkey" FOREIGN KEY ("historical_id") REFERENCES "historicals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_products" ADD CONSTRAINT "cart_products_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "carts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historical_products" ADD CONSTRAINT "historical_products_historica_id_fkey" FOREIGN KEY ("historica_id") REFERENCES "historicals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
