import {
  Controller,
  Post,
  Get,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateItemDTO } from './products.dto';
import { Product } from './products.interface';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}
  @Post()
  create(@Body() createItemDTO: CreateItemDTO): Promise<Product> {
    return this.productsService.create(createItemDTO);
  }

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Put(':id')
  update(
    @Body() updateProductDTO: CreateItemDTO,
    @Param('id') id,
  ): Promise<Product> {
    return this.productsService.update(id, updateProductDTO);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Product> {
    return this.productsService.delete(id);
  }
}
