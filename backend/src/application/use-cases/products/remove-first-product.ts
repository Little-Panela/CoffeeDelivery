import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../../application/repositories/products-repository';
import { Product } from '../../../application/entities/product';

interface RemoveFirstProductResponse {
  products: Product[];
}

@Injectable()
export class RemoveFirstProduct {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(): Promise<RemoveFirstProductResponse> {
    if ((await this.productsRepository.all()).length === 0) {
      throw new Error('Lista vazia'); // Passar para uma pasta de erros
    }

    const product = await this.productsRepository.removeFirst();

    const products = await this.productsRepository.all();

    return {
      products,
    };
  }
}
