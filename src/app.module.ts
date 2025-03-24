import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { RabbitMQModule } from './shared/rabbitmq/rabbitmq.module';
import { StockTransactionModule } from './stock-transaction/stock-transaction.module';

@Module({
  imports: [
    DatabaseModule,
    StockTransactionModule,
    DatabaseModule,
    ConfigModule.forRoot(),
    RabbitMQModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
