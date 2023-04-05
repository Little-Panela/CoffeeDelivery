import { Module } from '@nestjs/common';
import { ProductsRepository } from '../../application/repositories/products-repository';
import { LocalProductsRepository } from './local/repositories/local-products-repository';

@Module({
  providers: [
    {
      provide: ProductsRepository,
      useClass: LocalProductsRepository,
    },
  ],
  exports: [ProductsRepository],
})
export class DatabaseModule {}
