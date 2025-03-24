import {
  Controller,
  Post,
  Get,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { StockTransactionService } from './stock-transaction.service';
import {
  DimPartDto,
  DimSupplierDto,
  DimTransactionTypeDto,
  DimDateDto,
  FactStockTransactionDto,
} from './dto';
import { ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@Controller('stock-transactions')
export class StockTransactionController {
  constructor(
    private readonly stockTransactionService: StockTransactionService,
  ) {}

  // DimPart Endpoints
  @Post('dim-part')
  @ApiOperation({ summary: 'Create a new DimPart' })
  @ApiBody({ type: DimPartDto })
  @ApiResponse({ status: 201, description: 'DimPart created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async createDimPart(@Body() dimPartDto: DimPartDto) {
    return this.stockTransactionService.createDimPart(dimPartDto);
  }

  @Get('dim-part')
  @ApiOperation({ summary: 'Get all DimParts' })
  @ApiResponse({
    status: 200,
    description: 'List of DimParts',
    type: [DimPartDto],
  })
  async findAllDimPart() {
    return this.stockTransactionService.findAllDimPart();
  }

  @Get('dim-part/:id')
  @ApiOperation({ summary: 'Get a DimPart by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimPart' })
  @ApiResponse({ status: 200, description: 'DimPart found', type: DimPartDto })
  @ApiResponse({ status: 404, description: 'DimPart not found' })
  async findOneDimPart(@Param('id') id: number) {
    return this.stockTransactionService.findOneDimPart(id);
  }

  @Put('dim-part/:id')
  @ApiOperation({ summary: 'Update a DimPart by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimPart' })
  @ApiBody({ type: DimPartDto })
  @ApiResponse({
    status: 200,
    description: 'DimPart updated successfully',
    type: DimPartDto,
  })
  @ApiResponse({ status: 404, description: 'DimPart not found' })
  async updateDimPart(@Param('id') id: number, @Body() dimPartDto: DimPartDto) {
    return this.stockTransactionService.updateDimPart(id, dimPartDto);
  }

  @Delete('dim-part/:id')
  @ApiOperation({ summary: 'Remove a DimPart by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimPart' })
  @ApiResponse({ status: 200, description: 'DimPart removed successfully' })
  @ApiResponse({ status: 404, description: 'DimPart not found' })
  async removeDimPart(@Param('id') id: number) {
    return this.stockTransactionService.removeDimPart(id);
  }

  // DimTransactionType Endpoints
  @Post('dim-transaction-type')
  @ApiOperation({ summary: 'Create a new DimTransactionType' })
  @ApiBody({ type: DimTransactionTypeDto })
  @ApiResponse({
    status: 201,
    description: 'DimTransactionType created successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async createDimTransactionType(
    @Body() dimTransactionTypeDto: DimTransactionTypeDto,
  ) {
    return this.stockTransactionService.createDimTransactionType(
      dimTransactionTypeDto,
    );
  }

  @Get('dim-transaction-type')
  @ApiOperation({ summary: 'Get all DimTransactionTypes' })
  @ApiResponse({
    status: 200,
    description: 'List of DimTransactionTypes',
    type: [DimTransactionTypeDto],
  })
  async findAllDimTransactionType() {
    return this.stockTransactionService.findAllDimTransactionType();
  }

  @Get('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Get a DimTransactionType by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimTransactionType' })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType found',
    type: DimTransactionTypeDto,
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async findOneDimTransactionType(@Param('id') id: number) {
    return this.stockTransactionService.findOneDimTransactionType(id);
  }

  @Put('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Update a DimTransactionType by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimTransactionType' })
  @ApiBody({ type: DimTransactionTypeDto })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType updated successfully',
    type: DimTransactionTypeDto,
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async updateDimTransactionType(
    @Param('id') id: number,
    @Body() dimTransactionTypeDto: DimTransactionTypeDto,
  ) {
    return this.stockTransactionService.updateDimTransactionType(
      id,
      dimTransactionTypeDto,
    );
  }

  @Delete('dim-transaction-type/:id')
  @ApiOperation({ summary: 'Remove a DimTransactionType by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimTransactionType' })
  @ApiResponse({
    status: 200,
    description: 'DimTransactionType removed successfully',
  })
  @ApiResponse({ status: 404, description: 'DimTransactionType not found' })
  async removeDimTransactionType(@Param('id') id: number) {
    return this.stockTransactionService.removeDimTransactionType(id);
  }

  // DimDate Endpoints
  @Post('dim-date')
  @ApiOperation({ summary: 'Create a new DimDate' })
  @ApiBody({ type: DimDateDto })
  @ApiResponse({ status: 201, description: 'DimDate created successfully' })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async createDimDate(@Body() dimDateDto: DimDateDto) {
    return this.stockTransactionService.createDimDate(dimDateDto);
  }

  @Get('dim-date')
  @ApiOperation({ summary: 'Get all DimDates' })
  @ApiResponse({
    status: 200,
    description: 'List of DimDates',
    type: [DimDateDto],
  })
  async findAllDimDate() {
    return this.stockTransactionService.findAllDimDate();
  }

  @Get('dim-date/:id')
  @ApiOperation({ summary: 'Get a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate' })
  @ApiResponse({ status: 200, description: 'DimDate found', type: DimDateDto })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async findOneDimDate(@Param('id') id: number) {
    return this.stockTransactionService.findOneDimDate(id);
  }

  @Put('dim-date/:id')
  @ApiOperation({ summary: 'Update a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate' })
  @ApiBody({ type: DimDateDto })
  @ApiResponse({
    status: 200,
    description: 'DimDate updated successfully',
    type: DimDateDto,
  })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async updateDimDate(@Param('id') id: number, @Body() dimDateDto: DimDateDto) {
    return this.stockTransactionService.updateDimDate(id, dimDateDto);
  }

  @Delete('dim-date/:id')
  @ApiOperation({ summary: 'Remove a DimDate by ID' })
  @ApiParam({ name: 'id', description: 'ID of the DimDate' })
  @ApiResponse({ status: 200, description: 'DimDate removed successfully' })
  @ApiResponse({ status: 404, description: 'DimDate not found' })
  async removeDimDate(@Param('id') id: number) {
    return this.stockTransactionService.removeDimDate(id);
  }

  // FactStockTransaction Endpoints
  @Post('fact-stock-transaction')
  @ApiOperation({ summary: 'Create a new FactStockTransaction' })
  @ApiBody({ type: FactStockTransactionDto })
  @ApiResponse({
    status: 201,
    description: 'FactStockTransaction created successfully',
  })
  @ApiResponse({ status: 400, description: 'Invalid data' })
  async createFactStockTransaction(
    @Body() factStockTransactionDto: FactStockTransactionDto,
  ) {
    return this.stockTransactionService.createFactStockTransaction(
      factStockTransactionDto,
    );
  }

  @Get('fact-stock-transaction')
  @ApiOperation({ summary: 'Get all FactStockTransactions' })
  @ApiResponse({
    status: 200,
    description: 'List of FactStockTransactions',
    type: [FactStockTransactionDto],
  })
  async findAllFactStockTransaction() {
    return this.stockTransactionService.findAllFactStockTransaction();
  }

  @Get('fact-stock-transaction/:id')
  @ApiOperation({ summary: 'Get a FactStockTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactStockTransaction' })
  @ApiResponse({
    status: 200,
    description: 'FactStockTransaction found',
    type: FactStockTransactionDto,
  })
  @ApiResponse({ status: 404, description: 'FactStockTransaction not found' })
  async findOneFactStockTransaction(@Param('id') id: number) {
    return this.stockTransactionService.findOneFactStockTransaction(id);
  }

  @Put('fact-stock-transaction/:id')
  @ApiOperation({ summary: 'Update a FactStockTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactStockTransaction' })
  @ApiBody({ type: FactStockTransactionDto })
  @ApiResponse({
    status: 200,
    description: 'FactStockTransaction updated successfully',
    type: FactStockTransactionDto,
  })
  @ApiResponse({ status: 404, description: 'FactStockTransaction not found' })
  async updateFactStockTransaction(
    @Param('id') id: number,
    @Body() factStockTransactionDto: FactStockTransactionDto,
  ) {
    return this.stockTransactionService.updateFactStockTransaction(
      id,
      factStockTransactionDto,
    );
  }

  @Delete('fact-stock-transaction/:id')
  @ApiOperation({ summary: 'Remove a FactStockTransaction by ID' })
  @ApiParam({ name: 'id', description: 'ID of the FactStockTransaction' })
  @ApiResponse({
    status: 200,
    description: 'FactStockTransaction removed successfully',
  })
  @ApiResponse({ status: 404, description: 'FactStockTransaction not found' })
  async removeFactStockTransaction(@Param('id') id: number) {
    return this.stockTransactionService.removeFactStockTransaction(id);
  }
}
