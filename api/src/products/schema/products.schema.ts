import { Prop,Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type ProductsDocument = Products & Document

@Schema({collection:'Products'})
export class Products {
    @Prop()
    name!: string;

    @Prop()
    desc!:string;

    @Prop()
    image!:string;
}

export const ProductsSchema = SchemaFactory.createForClass(Products);
