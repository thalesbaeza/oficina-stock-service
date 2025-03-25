import { MigrationInterface, QueryRunner } from 'typeorm';

export class DimPart1742559221584 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE IF NOT EXISTS dim_part (
            part_id SERIAL PRIMARY KEY,               -- Identificador único da peça
            part_name VARCHAR(100),                   -- Nome da peça
            part_type VARCHAR(50),                    -- Tipo de peça (ex: motor, pneu, etc.)
            part_brand VARCHAR(50),                   -- Marca da peça
            part_price DECIMAL(10, 2)                 -- Preço da peça
        );
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS dim_part;
        `,
    );
  }
}
