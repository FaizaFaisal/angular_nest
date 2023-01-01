import { Controller, Get } from "@nestjs/common";
import { ProductsService } from "./products.service";
@Controller('Products')
export class ProductsController {

    constructor(private productsService: ProductsService){}

    @Get()
    async getAll(){
        return await this.productsService.getAll();
    }
}