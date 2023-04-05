import { LocalProductMapper } from './../mappers/local-products-mapper';
import { Product } from '../../../../application/entities/product';
import { ProductsRepository } from '../../../../application/repositories/products-repository';
import { Deque } from '../deque';

export class LocalProductsRepository implements ProductsRepository {
  public products = new Deque();

  async createFirst(product: Product): Promise<void> {
    const row = LocalProductMapper.toLocal(product);

    await this.products.addFront(row);
    return;
  }

  async createLast(product: Product): Promise<void> {
    const row = LocalProductMapper.toLocal(product);

    await this.products.addBack(row);
    return;
  }

  async removeFirst(): Promise<void> {
    await this.products.removeFront();
    return;
  }

  async removeLast(): Promise<void> {
    await this.products.removeBack();
    return;
  }

  async all(): Promise<Product[]> {
    const products = this.products.list();

    return products.map(LocalProductMapper.toDomain);
  }

  async findByName(productName: string): Promise<Product> {
    const product = await this.products.findByName(productName);

    if (!product) {
      return null;
    }

    return LocalProductMapper.toDomain(product);
  }

  async findById(productId: string): Promise<Product | null> {
    const product = await this.products.findByID(productId);

    if (!product) {
      return null;
    }

    return LocalProductMapper.toDomain(product);
  }

  async purchase(productId: string, quantity: number): Promise<Product> {
    const product = await this.products.buy(productId, quantity);

    return LocalProductMapper.toDomain(product);
  }

  async save(product: Product): Promise<void> {
    const row = LocalProductMapper.toLocal(product);

    console.log(row);

    await this.products.update(row.id, row);
  }
}
