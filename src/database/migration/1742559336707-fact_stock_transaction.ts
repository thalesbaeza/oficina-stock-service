import { MigrationInterface, QueryRunner } from 'typeorm';

export class FactStockTransaction1742559336707 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        CREATE TABLE fact_stock_transaction (
            stock_transaction_id SERIAL PRIMARY KEY,    -- Identificador único da transação de estoque
            part_id INT,                                -- Chave estrangeira para a peça
            transaction_type_id INT,                    -- Chave estrangeira para o tipo de transação de estoque (entrada, saída)
            quantity INT,                               -- Quantidade de peças movimentadas
            transaction_date_id INT,                    -- Chave estrangeira para a tabela de data
            stock_balance INT,                          -- Quantidade de estoque após a transação
            FOREIGN KEY (part_id) REFERENCES dim_part(part_id),
            FOREIGN KEY (transaction_type_id) REFERENCES dim_transaction_type(transaction_type_id),
            FOREIGN KEY (transaction_date_id) REFERENCES dim_date(date_id)
        );
        `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `
        DROP TABLE IF EXISTS fact_stock_transaction;
        `,
    );
  }
}
