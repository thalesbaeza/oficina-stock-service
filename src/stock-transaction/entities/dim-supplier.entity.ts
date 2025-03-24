import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('dim_supplier') // Nome da tabela no banco de dados
export class DimSupplier {
  @PrimaryGeneratedColumn()
  supplier_id: number; // Identificador único do fornecedor

  @Column('varchar', { length: 100 })
  supplier_name: string; // Nome do fornecedor

  @Column('varchar', { length: 100 })
  supplier_contact: string; // Contato do fornecedor (telefone, email)

  @Column('varchar', { length: 255 })
  supplier_address: string; // Endereço do fornecedor
}
