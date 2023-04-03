import { Injectable } from '@nestjs/common';
import { Product } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

interface CreateFirstProductRequest {
  name: string;
  description: string;
  price: number;
  quantity: number;
  imageUrl: string;
}

interface CreateFirstProductResponse {
  product: Product;
}

@Injectable()
export class CreateFirstProduct {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(
    request: CreateFirstProductRequest,
  ): Promise<CreateFirstProductResponse> {
    const { name, description, imageUrl, price, quantity } = request;

    const product = new Product({
      name,
      description,
      imageUrl,
      price,
      quantity,
    });

    await this.productsRepository.createFirst(product);

    return {
      product,
    };
  }
}
