import { Product } from '../../application/entities/product';

export class ProductViewModel {
  static toHTTP(product: Product) {
    return {
      id: product.id,
      name: product.name,
      description: product.description,
      imageUrl: product.imageUrl,
      price: product.price,
      quantity: product.quantity,
      createdAt: product.createdAt,
    };
  }
}
