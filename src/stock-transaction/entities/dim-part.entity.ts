import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dim_part') // Nome da tabela no banco de dados
export class DimPart {
  @PrimaryGeneratedColumn()
  part_id: number; // Identificador único da peça

  @Column('varchar', { length: 100 })
  part_name: string; // Nome da peça

  @Column('varchar', { length: 50 })
  part_type: string; // Tipo de peça (ex: motor, pneu, etc.)

  @Column('varchar', { length: 50 })
  part_brand: string; // Marca da peça

  @Column('decimal', { precision: 10, scale: 2 })
  part_price: number; // Preço da peça
}
