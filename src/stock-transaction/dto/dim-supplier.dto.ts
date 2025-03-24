import { IsString, IsNotEmpty, IsInt } from 'class-validator';

export class DimSupplierDto {
  @IsInt()
  supplier_id: number; // Identificador único do fornecedor

  @IsString()
  @IsNotEmpty()
  supplier_name: string; // Nome do fornecedor

  @IsString()
  @IsNotEmpty()
  supplier_contact: string; // Contato do fornecedor (telefone, email)

  @IsString()
  @IsNotEmpty()
  supplier_address: string; // Endereço do fornecedor
}
