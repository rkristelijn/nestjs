import { Document } from 'mongoose';

export interface Product {
  title: string;
  brand: string;
  currentPrice: number;
}

export interface ProductDocument extends Document, Product {}
