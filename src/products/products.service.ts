import Debug from 'debug';
const debug = Debug('nest-app:products.service');

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
    debug('create');
    const newItem = new this.productsModel(product);
    return await newItem.save();
  }

  async findAll(): Promise<Product[]> {
    debug('findAll');
    return await this.productsModel.find();
  }

  async findOne(id: string): Promise<Product> {
    debug('findOne');
    return await this.productsModel.findOne({ _id: id });
  }

  async update(id: string, item: Product): Promise<Product> {
    debug('update');
    return await this.productsModel.findByIdAndUpdate(id, item, { new: true });
  }

  async delete(id: string): Promise<Product> {
    debug('delete');
    return await this.productsModel.findByIdAndRemove(id);
  }
}
