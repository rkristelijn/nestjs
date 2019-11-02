import { ObjectId } from 'mongodb';
import { Model, Schema } from 'mongoose';
import { ProductDocument } from './products.interface';

export const ProductSchema = new Schema({
  _id: { type: ObjectId, auto: true },
  title: String,
  brand: String,
  currentPrice: Number,
});

export type ProductModel = Model<ProductDocument>;
