import { Product } from './product';

describe('Product', () => {
  it('should be able to create a product', () => {
    const product = new Product({
      name: 'Café',
      description: 'Café de qualidade',
      price: 10,
      quantity: 10,
    });

    expect(product).toBeTruthy();
  });
});
