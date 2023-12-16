/*
  Warnings:

  - You are about to drop the column `amount` on the `Historical_products` table. All the data in the column will be lost.
  - You are about to drop the column `productId` on the `Historical_products` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[historicalId]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `Historical_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderBuyId` to the `Historical_products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `historicalId` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cart" ADD COLUMN     "isEmpty" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "Historical_products" DROP COLUMN "amount",
DROP COLUMN "productId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "orderBuyId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "historicalId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_historicalId_key" ON "User"("historicalId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "Historical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
