/*
  Warnings:

  - You are about to drop the column `historica_id` on the `historical_products` table. All the data in the column will be lost.
  - Added the required column `historical_id` to the `historical_products` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "historical_products" DROP CONSTRAINT "historical_products_historica_id_fkey";

-- AlterTable
ALTER TABLE "historical_products" DROP COLUMN "historica_id",
ADD COLUMN     "historical_id" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "historical_products" ADD CONSTRAINT "historical_products_historical_id_fkey" FOREIGN KEY ("historical_id") REFERENCES "historicals"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
