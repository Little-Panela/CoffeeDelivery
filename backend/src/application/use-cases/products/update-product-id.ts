import { Injectable } from '@nestjs/common';
import { ProductProps } from '../../entities/product';
import { ProductsRepository } from '../../repositories/products-repository';

// type FindProductByIdRequest = ProductProps;

interface FindProductByIdRequest extends ProductProps {
  id: string;
}

@Injectable()
export class UpdateProductById {
  constructor(private productsRepository: ProductsRepository) {}

  async execute(request: FindProductByIdRequest): Promise<void> {
    const { id, name, description, imageUrl, price, quantity, createdAt } =
      request;

    const product = await this.productsRepository.findById(id);

    product.update({
      name,
      description,
      imageUrl,
      price,
      quantity,
      createdAt,
    });

    this.productsRepository.save(product);
  }
}
