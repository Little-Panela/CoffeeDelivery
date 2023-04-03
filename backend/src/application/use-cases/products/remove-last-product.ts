import { Injectable } from '@nestjs/common';
import { ProductsRepository } from 'src/application/repositories/products-repository';
import { Product } from 'src/application/entities/product';

interface RemoveLastProductResponse {
  products: Product[];
}

@Injectable()
export class RemoveLastProduct {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<RemoveLastProductResponse> {
    if ((await this.productsRepository.all()).length === 0) {
      throw new Error('Lista vazia'); // Passar para uma pasta de erros
    }

    const product = await this.productsRepository.removeLast();

    const products = await this.productsRepository.all();

    return {
      products,
    };
  }
}
