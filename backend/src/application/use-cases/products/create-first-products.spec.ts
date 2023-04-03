import { InMemoryProductsRepository } from './../../../../test/repositories/in-memory-products-repository';
import { CreateFirstProduct } from './create-first-product';

describe('Send notification', () => {
  it('should be send a notification', async () => {
    const productsRepository = new InMemoryProductsRepository();
    const createFirst = new CreateFirstProduct(productsRepository);

    const { product } = await createFirst.execute({
      name: 'Café',
      description: 'Café de qualidade',
      price: 10,
      quantity: 10,
    });

    expect(productsRepository.products).toHaveLength(1);
    expect(productsRepository.products[0]).toEqual(product);
  });
});
