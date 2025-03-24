import { Module } from '@nestjs/common';
import { StockTransactionService } from './stock-transaction.service';
import { StockTransactionController } from './stock-transaction.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DimDate,
  DimPart,
  DimSupplier,
  DimTransactionType,
  FactStockTransaction,
} from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      DimDate,
      DimPart,
      DimSupplier,
      DimTransactionType,
      FactStockTransaction,
    ]),
  ],
  controllers: [StockTransactionController],
  providers: [StockTransactionService],
})
export class StockTransactionModule {}
