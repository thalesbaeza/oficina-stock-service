import { IsString, IsNotEmpty, IsDecimal, IsInt } from 'class-validator';

export class DimPartDto {
  @IsInt()
  part_id: number; // Identificador único da peça

  @IsString()
  @IsNotEmpty()
  part_name: string; // Nome da peça

  @IsString()
  @IsNotEmpty()
  part_type: string; // Tipo de peça (ex: motor, pneu, etc.)

  @IsString()
  @IsNotEmpty()
  part_brand: string; // Marca da peça

  @IsDecimal()
  part_price: number; // Preço da peça
}
