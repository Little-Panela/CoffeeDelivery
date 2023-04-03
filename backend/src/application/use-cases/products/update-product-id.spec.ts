import { InMemoryProductsRepository } from './../../../../test/repositories/in-memory-products-repository';
import { CreateFirstProduct } from './create-first-product';

// describe('Product', () => {
describe('Update Product', () => {
  const productsRepository = new InMemoryProductsRepository();
  const createFirst = new CreateFirstProduct(productsRepository);
  it('should update product price', async () => {
    const { product } = await createFirst.execute({
      name: 'Product A',
      description: 'Description of Product A',
      price: 19.99,
      quantity: 10,
    });

    product.update({ price: 24.99 });

    expect(product.price).toEqual(24.99);

    productsRepository.findById(product.id);

    expect(productsRepository.products[0].price).toEqual(24.99);
  });

  // it('should throw an error when updating product name with invalid length', async () => {
  //   const { product } = await createFirst.execute({
  //     name: 'Product A',
  //     description: 'Description of Product A',
  //     price: 19.99,
  //     quantity: 10,
  //   });

  //   expect(() => {
  //     product.update({ name: '' });
  //   }).toThrowError('Nome do produto deve ter entre 1 e 30 caracteres');
  // });

  // it('should throw an error when updating product description with invalid length', () => {
  //   const product = new Product({
  //     name: 'Product A',
  //     description: 'Description of Product A',
  //     price: 19.99,
  //     quantity: 10,
  //     createdAt: new Date('2022-01-01'),
  //   });

  //   expect(() => {
  //     product.update({ description: '' });
  //   }).toThrowError(
  //     'Descrição do produto deve ter entre 10 e 240 caracteres',
  //   );
  // });
});
// });
