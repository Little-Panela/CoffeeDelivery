import { UpdateProductById } from './../../application/use-cases/products/update-product-id';
import { RemoveLastProduct } from './../../application/use-cases/products/remove-last-product';
import { CreateLastProduct } from './../../application/use-cases/products/create-last-product';
import { FindProductByName } from './../../application/use-cases/products/find-product-by-name';
import { FindProductById } from './../../application/use-cases/products/find-product-by-id';
import { Module } from '@nestjs/common';
import { DatabaseModule } from './../database/database.module';
import { CreateFirstProduct } from 'src/application/use-cases/products/create-first-product';
import { ProductsController } from './controllers/products.controller';
import { ListProducts } from 'src/application/use-cases/products/list-products';
import { RemoveFirstProduct } from 'src/application/use-cases/products/remove-first-product';
import { BuyProduct } from 'src/application/use-cases/products/buy-product';

@Module({
  imports: [DatabaseModule],
  controllers: [ProductsController],
  providers: [
    CreateFirstProduct,
    CreateLastProduct,
    ListProducts,
    FindProductById,
    FindProductByName,
    RemoveFirstProduct,
    RemoveLastProduct,
    UpdateProductById,
    BuyProduct,
  ],
})
export class HttpModule {}
