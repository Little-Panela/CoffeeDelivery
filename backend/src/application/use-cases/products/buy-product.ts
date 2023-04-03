import { Injectable } from '@nestjs/common';
import { ProductsRepository } from '../../repositories/products-repository';

type BuyProductRequest = {
  productId: string;
  quantity: number;
};

@Injectable()
export class BuyProduct {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(request: BuyProductRequest): Promise<void> {
    const { productId, quantity } = request;

    const product = await this.productsRepository.findById(productId);

    if (product.quantity < quantity) {
      throw new Error(`Produto ${product.name} não tem estoque suficiente!`);
    }

    product.quantity -= quantity;

    product.update(product);
  }
}
