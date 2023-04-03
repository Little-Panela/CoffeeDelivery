import { Product } from '../entities/product';

export abstract class ProductsRepository {
  abstract createFirst(product: Product): Promise<void>;
  abstract createLast(product: Product): Promise<void>;
  abstract removeFirst(): Promise<void>;
  abstract removeLast(): Promise<void>;
  abstract findById(productId: string): Promise<Product | null>;
  abstract findByName(productName: string): Promise<Product | null>;
  abstract purchase(
    productId: string,
    quantity: number,
  ): Promise<Product | null>;
  abstract save(product: Product): Promise<void>;
  abstract all(): Promise<Product[]>;
}
