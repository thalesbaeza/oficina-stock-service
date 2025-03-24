import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  DimDateDto,
  DimPartDto,
  DimSupplierDto,
  DimTransactionTypeDto,
  FactStockTransactionDto,
} from './dto';
import {
  DimDate,
  DimPart,
  DimSupplier,
  DimTransactionType,
  FactStockTransaction,
} from './entities';

@Injectable()
export class StockTransactionService {
  constructor(
    @InjectRepository(DimPart)
    private readonly dimPartRepository: Repository<DimPart>,

    @InjectRepository(DimSupplier)
    private readonly dimSupplierRepository: Repository<DimSupplier>,

    @InjectRepository(DimTransactionType)
    private readonly dimTransactionTypeRepository: Repository<DimTransactionType>,

    @InjectRepository(DimDate)
    private readonly dimDateRepository: Repository<DimDate>,

    @InjectRepository(FactStockTransaction)
    private readonly factStockTransactionRepository: Repository<FactStockTransaction>,
  ) {}

  @RabbitSubscribe({
    exchange: 'mechanic',
    routingKey: 'teste',
    queue: 'teste-queue',
  })
  async stockUpdate(data: {
    customer_name: string;
    customer_phone: string;
    customer_email: string;
    customer_address: string;
  }) {
    console.log('Mensagem recebida do fluxo de caixa:', data);
    console.log(data.customer_phone);
  }

  // DimPart Methods
  async createDimPart(dimPartDto: DimPartDto): Promise<DimPart> {
    const part = this.dimPartRepository.create(dimPartDto);
    return await this.dimPartRepository.save(part);
  }

  async findAllDimPart(): Promise<DimPart[]> {
    return this.dimPartRepository.find();
  }

  async findOneDimPart(id: number): Promise<DimPart> {
    return this.dimPartRepository.findOne({ where: { part_id: id } });
  }

  async updateDimPart(id: number, dimPartDto: DimPartDto): Promise<DimPart> {
    const part = await this.dimPartRepository.findOne({
      where: { part_id: id },
    });
    if (!part) {
      throw new Error(`DimPart with ID ${id} not found`);
    }
    Object.assign(part, dimPartDto);
    return this.dimPartRepository.save(part);
  }

  async removeDimPart(id: number): Promise<DimPart> {
    const part = await this.dimPartRepository.findOne({
      where: { part_id: id },
    });
    if (!part) {
      throw new Error(`DimPart with ID ${id} not found`);
    }
    return this.dimPartRepository.remove(part);
  }

  // DimTransactionType Methods
  async createDimTransactionType(
    dimTransactionTypeDto: DimTransactionTypeDto,
  ): Promise<DimTransactionType> {
    const transactionType = this.dimTransactionTypeRepository.create(
      dimTransactionTypeDto,
    );
    return await this.dimTransactionTypeRepository.save(transactionType);
  }

  async findAllDimTransactionType(): Promise<DimTransactionType[]> {
    return this.dimTransactionTypeRepository.find();
  }

  async findOneDimTransactionType(id: number): Promise<DimTransactionType> {
    return this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });
  }

  async updateDimTransactionType(
    id: number,
    dimTransactionTypeDto: DimTransactionTypeDto,
  ): Promise<DimTransactionType> {
    const transactionType = await this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });
    if (!transactionType) {
      throw new Error(`DimTransactionType with ID ${id} not found`);
    }
    Object.assign(transactionType, dimTransactionTypeDto);
    return this.dimTransactionTypeRepository.save(transactionType);
  }

  async removeDimTransactionType(id: number): Promise<DimTransactionType> {
    const transactionType = await this.dimTransactionTypeRepository.findOne({
      where: { transaction_type_id: id },
    });
    if (!transactionType) {
      throw new Error(`DimTransactionType with ID ${id} not found`);
    }
    return this.dimTransactionTypeRepository.remove(transactionType);
  }

  // DimDate Methods
  async createDimDate(dimDateDto: DimDateDto): Promise<DimDate> {
    const date = this.dimDateRepository.create(dimDateDto);
    return await this.dimDateRepository.save(date);
  }

  async findAllDimDate(): Promise<DimDate[]> {
    return this.dimDateRepository.find();
  }

  async findOneDimDate(id: number): Promise<DimDate> {
    return this.dimDateRepository.findOne({ where: { date_id: id } });
  }

  async updateDimDate(id: number, dimDateDto: DimDateDto): Promise<DimDate> {
    const date = await this.dimDateRepository.findOne({
      where: { date_id: id },
    });
    if (!date) {
      throw new Error(`DimDate with ID ${id} not found`);
    }
    Object.assign(date, dimDateDto);
    return this.dimDateRepository.save(date);
  }

  async removeDimDate(id: number): Promise<DimDate> {
    const date = await this.dimDateRepository.findOne({
      where: { date_id: id },
    });
    if (!date) {
      throw new Error(`DimDate with ID ${id} not found`);
    }
    return this.dimDateRepository.remove(date);
  }

  // DimSupplier Methods
  async createDimSupplier(
    dimSupplierDto: DimSupplierDto,
  ): Promise<DimSupplier> {
    const supplier = this.dimSupplierRepository.create(dimSupplierDto);
    return await this.dimSupplierRepository.save(supplier);
  }

  async findAllDimSupplier(): Promise<DimSupplier[]> {
    return this.dimSupplierRepository.find();
  }

  async findOneDimSupplier(id: number): Promise<DimSupplier> {
    return this.dimSupplierRepository.findOne({ where: { supplier_id: id } });
  }

  async updateDimSupplier(
    id: number,
    dimSupplierDto: DimSupplierDto,
  ): Promise<DimSupplier> {
    const supplier = await this.dimSupplierRepository.findOne({
      where: { supplier_id: id },
    });
    if (!supplier) {
      throw new Error(`DimSupplier with ID ${id} not found`);
    }
    Object.assign(supplier, dimSupplierDto);
    return this.dimSupplierRepository.save(supplier);
  }

  async removeDimSupplier(id: number): Promise<DimSupplier> {
    const supplier = await this.dimSupplierRepository.findOne({
      where: { supplier_id: id },
    });
    if (!supplier) {
      throw new Error(`DimSupplier with ID ${id} not found`);
    }
    return this.dimSupplierRepository.remove(supplier);
  }

  // FactStockTransaction Methods
  async createFactStockTransaction(
    factStockTransactionDto: FactStockTransactionDto,
  ): Promise<FactStockTransaction> {
    const stockTransaction = this.factStockTransactionRepository.create(
      factStockTransactionDto,
    );
    return await this.factStockTransactionRepository.save(stockTransaction);
  }

  async findAllFactStockTransaction(): Promise<FactStockTransaction[]> {
    return this.factStockTransactionRepository.find();
  }

  async findOneFactStockTransaction(id: number): Promise<FactStockTransaction> {
    return this.factStockTransactionRepository.findOne({
      where: { stock_transaction_id: id },
    });
  }

  async updateFactStockTransaction(
    id: number,
    factStockTransactionDto: FactStockTransactionDto,
  ): Promise<FactStockTransaction> {
    const stockTransaction = await this.factStockTransactionRepository.findOne({
      where: { stock_transaction_id: id },
    });
    if (!stockTransaction) {
      throw new Error(`FactStockTransaction with ID ${id} not found`);
    }
    Object.assign(stockTransaction, factStockTransactionDto);
    return this.factStockTransactionRepository.save(stockTransaction);
  }

  async removeFactStockTransaction(id: number): Promise<FactStockTransaction> {
    const stockTransaction = await this.factStockTransactionRepository.findOne({
      where: { stock_transaction_id: id },
    });
    if (!stockTransaction) {
      throw new Error(`FactStockTransaction with ID ${id} not found`);
    }
    return this.factStockTransactionRepository.remove(stockTransaction);
  }
}
