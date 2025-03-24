import { IsInt, IsNotEmpty } from 'class-validator';
import { DimPartDto } from './dim-part.dto';
import { DimTransactionTypeDto } from './dim-transaction-type.dto';
import { DimDateDto } from './dim-date.dto';

export class FactStockTransactionDto {
  @IsInt()
  stock_transaction_id: number; // Identificador único da transação de estoque

  @IsNotEmpty()
  part: DimPartDto; // Chave estrangeira para a peça

  @IsNotEmpty()
  transactionType: DimTransactionTypeDto; // Chave estrangeira para o tipo de transação de estoque

  @IsInt()
  quantity: number; // Quantidade de peças movimentadas

  @IsNotEmpty()
  transactionDate: DimDateDto; // Chave estrangeira para a tabela de data

  @IsInt()
  stock_balance: number; // Quantidade de estoque após a transação
}
