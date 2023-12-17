/*
  Warnings:

  - You are about to drop the `Historical` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "historical_products" DROP CONSTRAINT "historical_products_historicalId_fkey";

-- DropForeignKey
ALTER TABLE "users" DROP CONSTRAINT "users_historicalId_fkey";

-- DropTable
DROP TABLE "Historical";

-- CreateTable
CREATE TABLE "historicals" (
    "id" TEXT NOT NULL,

    CONSTRAINT "historicals_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "historicals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "historical_products" ADD CONSTRAINT "historical_products_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "historicals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
