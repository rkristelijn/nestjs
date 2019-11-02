import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './products.interface';
import { CreateItemDTO } from './products.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productsModel: Model<ProductDocument>,
  ) {}

  async create(product: CreateItemDTO): Promise<Product> {
    const newItem = new this.productsModel(product);
    return await newItem.save();
  }

  async findAll(): Promise<Product[]> {
    return await this.productsModel.find();
  }

  async findOne(id: string): Promise<Product> {
    return await this.productsModel.findOne({ _id: id });
  }

  async update(id: string, item: Product): Promise<Product> {
    return await this.productsModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<Product> {
    return await this.productsModel.findByIdAndRemove(id);
  }
}
