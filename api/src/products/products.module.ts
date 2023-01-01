import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { ProductsSchema } from './schema/products.schema';


@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: 'Products',
                schema: ProductsSchema,
                collection: 'Products',
            }
        ]),
    ],
    providers:[ProductsService],
    controllers:[
        ProductsController
    ]
})
export class ProductsModule {
   
}
