-- AddForeignKey
ALTER TABLE "Cart_products" ADD CONSTRAINT "Cart_products_cartId_fkey" FOREIGN KEY ("cartId") REFERENCES "Cart"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Historical_products" ADD CONSTRAINT "Historical_products_historicalId_fkey" FOREIGN KEY ("historicalId") REFERENCES "Historical"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
