import { ProductDeque as RawProduct } from '../deque';
import { Product } from '../../../../application/entities/product';

export class LocalProductMapper {
  static toLocal(product: Product) {
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

  static toDomain(raw: RawProduct): Product {
    return new Product(
      {
        name: raw.name,
        description: raw.description,
        imageUrl: raw.imageUrl,
        price: raw.price,
        quantity: raw.quantity,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
