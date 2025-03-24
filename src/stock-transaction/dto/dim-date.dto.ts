import { IsInt, IsString, IsDate } from 'class-validator';

export class DimDateDto {
  @IsInt()
  date_id: number; // Identificador único da data

  @IsDate()
  date: string; // Data completa (ISO 8601)

  @IsInt()
  day: number; // Dia do mês

  @IsInt()
  month: number; // Mês

  @IsInt()
  year: number; // Ano

  @IsInt()
  quarter: number; // Trimestre (1, 2, 3, 4)
}
