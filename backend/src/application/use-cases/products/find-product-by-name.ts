import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

interface FindProductByNameRequest {
  name: string;
}

interface FindProductByNameResponse {
  product: Product;
}

@Injectable()
export class FindProductByName {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    request: FindProductByNameRequest,
  ): Promise<FindProductByNameResponse> {
    const { name } = request;

    const product = await this.productsRepository.findByName(name);

    // if (!product) { // Produto não encontrado
    //   throw new NotificationNotFound(); // Passar para uma pasta de erros
    // }

    return {
      product,
    };
  }
}
