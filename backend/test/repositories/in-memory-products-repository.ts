import { Product } from 'src/application/entities/product';
import { ProductsRepository } from 'src/application/repositories/products-repository';

export class InMemoryProductsRepository implements ProductsRepository {
  public products: Product[] = [];

  async createFirst(product: Product): Promise<void> {
    await this.products.unshift(product);
  }

  async createLast(product: Product): Promise<void> {
    await this.products.push(product);
  }

  async removeFirst(): Promise<void> {
    await this.products.shift();
  }

  async removeLast(): Promise<void> {
    await this.products.pop();
  }

  async all(): Promise<Product[]> {
    return await this.products;
  }

  async findByName(productName: string): Promise<Product> {
    const product = await this.products.find(
      (item) => item.name === productName,
    );

    if (!product) {
      return null;
    }

    return product;
  }

  async findById(productId: string): Promise<Product | null> {
    const product = await this.products.find((item) => item.id === productId);

    if (!product) {
      return null;
    }

    return product;
  }

  async purchase(productId: string, quantity: number): Promise<Product | null> {
    if (quantity <= 0) {
      throw new Error(`Quantidade ${quantity} inválida!`);
    }

    const product = await this.findById(productId);

    if (!product) {
      return null;
    }

    if (product.name < quantity) {
      throw new Error(`Produto ${name} não tem estoque suficiente!`);
    }

    product.quantity -= quantity;

    return product;
  }

  async save(notification: Product): Promise<void> {
    const notificationIndex = this.products.findIndex(
      (item) => item.id === notification.id,
    );
    if (notificationIndex >= 0) {
      this.products[notificationIndex] = notification;
    }
  }
}
