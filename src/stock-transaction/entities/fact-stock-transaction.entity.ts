import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { DimDate, DimPart, DimTransactionType } from '../entities';

@Entity('fact_stock_transaction') // Nome da tabela no banco de dados
export class FactStockTransaction {
  @PrimaryGeneratedColumn()
  stock_transaction_id: number; // Identificador único da transação de estoque

  @ManyToOne(() => DimPart)
  @JoinColumn({ name: 'part_id' })
  part: DimPart;

  @ManyToOne(() => DimTransactionType)
  @JoinColumn({ name: 'transaction_type_id' })
  transactionType: DimTransactionType;

  @Column('int')
  quantity: number;

  @ManyToOne(() => DimDate)
  @JoinColumn({ name: 'transaction_date_id' })
  transactionDate: DimDate;

  @Column('int')
  stock_balance: number;
}
