import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

interface GetProductResponse {
  products: Product[];
}

@Injectable()
export class ListProducts {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<GetProductResponse> {
    const products = await this.productsRepository.all();

    return {
      products,
    };
  }
}
