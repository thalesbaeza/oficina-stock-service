import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import {
  DimDate,
  DimPart,
  DimSupplier,
  DimTransactionType,
  FactStockTransaction,
} from 'src/stock-transaction/entities';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => {
        return {
          type: 'postgres',
          host: process.env.TYPEORM_HOST,
          username: process.env.TYPEORM_USERNAME,
          password: process.env.TYPEORM_PASSWORD,
          database: process.env.TYPEORM_DATABASE,
          port: Number(process.env.TYPEORM_PORT),
          synchronize: true,
          dropSchema: true,
          name: 'default',
          entities: [
            DimDate,
            DimPart,
            DimSupplier,
            DimTransactionType,
            FactStockTransaction,
          ],
          migrationsRun: false,
          keepConnectionAlive: true,
        };
      },
    }),
  ],
})
export class DatabaseModule {}
