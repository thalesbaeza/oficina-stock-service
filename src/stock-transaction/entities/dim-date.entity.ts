import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dim_date') // Nome da tabela no banco de dados
export class DimDate {
  @PrimaryGeneratedColumn()
  date_id: number; // Identificador único da data

  @Column('date')
  date: string; // Data completa

  @Column('int')
  day: number; // Dia do mês

  @Column('int')
  month: number; // Mês

  @Column('int')
  year: number; // Ano

  @Column('int')
  quarter: number; // Trimestre (1, 2, 3, 4)
}
