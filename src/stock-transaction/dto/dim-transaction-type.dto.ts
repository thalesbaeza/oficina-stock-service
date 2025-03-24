import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class DimTransactionTypeDto {
  @IsInt()
  transaction_type_id: number; // Identificador único do tipo de transação

  @IsString()
  @IsNotEmpty()
  transaction_type_name: string; // Nome do tipo de transação (ex: Entrada, Saída)

  @IsString()
  description: string; // Descrição do tipo de transação
}
