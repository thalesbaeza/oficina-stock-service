import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dim_transaction_type') // Nome da tabela no banco de dados
export class DimTransactionType {
  @PrimaryGeneratedColumn()
  transaction_type_id: number; // Identificador único do tipo de transação

  @Column('varchar', { length: 50 })
  transaction_type_name: string; // Nome do tipo de transação (ex: Entrada, Saída)

  @Column('text')
  description: string; // Descrição do tipo de transação
}
