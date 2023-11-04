/*
  Warnings:

  - You are about to drop the column `cartId` on the `Buys` table. All the data in the column will be lost.
  - You are about to drop the `ShoppingHistory` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `userId` to the `Buys` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Buys" DROP CONSTRAINT "Buys_cartId_fkey";

-- DropForeignKey
ALTER TABLE "ShoppingHistory" DROP CONSTRAINT "ShoppingHistory_userId_fkey";

-- AlterTable
ALTER TABLE "Buys" DROP COLUMN "cartId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- DropTable
DROP TABLE "ShoppingHistory";

-- AddForeignKey
ALTER TABLE "Buys" ADD CONSTRAINT "Buys_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
