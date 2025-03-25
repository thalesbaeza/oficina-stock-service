import { MigrationInterface, QueryRunner } from 'typeorm';

export class DimSupplier1742559170281 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
            CREATE TABLE IF NOT EXISTS dim_supplier (
                supplier_id SERIAL PRIMARY KEY,           -- Identificador único do fornecedor
                supplier_name VARCHAR(100),               -- Nome do fornecedor
                supplier_contact VARCHAR(100),            -- Contato do fornecedor (telefone, email)
                supplier_address VARCHAR(255)             -- Endereço do fornecedor
            );
            
            `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS dim_supplier;
        `,
    );
  }
}
