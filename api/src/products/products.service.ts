import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Products, ProductsDocument } from './schema/products.schema';
 
@Injectable()
export class ProductsService {
  /**
   * 
  */
  constructor(
    @InjectModel(Products.name) private ProductsModel: Model<ProductsDocument>,
  ) {}

  async getAll():Promise<Products[]>{
    return await this.ProductsModel.find().exec();
  }
}