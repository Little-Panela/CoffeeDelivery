import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

interface FindProductByIdRequest {
  productId: string;
}

interface FindProductByIdResponse {
  product: Product;
}

@Injectable()
export class FindProductById {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    request: FindProductByIdRequest,
  ): Promise<FindProductByIdResponse> {
    const { productId } = request;

    const product = await this.productsRepository.findById(productId);

    // if (!product) { // Produto não encontrado
    //   throw new NotificationNotFound(); // Passar para uma pasta de erros
    // }

    return {
      product,
    };
  }
}
