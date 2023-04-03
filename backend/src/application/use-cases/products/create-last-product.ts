import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

interface CreateLastProductRequest {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CreateLastProductResponse {
  product: Product;
}

@Injectable()
export class CreateLastProduct {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    request: CreateLastProductRequest,
  ): Promise<CreateLastProductResponse> {
    const { name, description, imageUrl, price, quantity } = request;

    const product = new Product({
      name,
      description,
      imageUrl,
      price,
      quantity,
    });

    await this.productsRepository.createLast(product);

    return {
      product,
    };
  }
}
