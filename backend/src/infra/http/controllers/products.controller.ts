import { BuyProduct } from './../../../application/use-cases/products/buy-product';
import { UpdateProductById } from './../../../application/use-cases/products/update-product-id';
import { RemoveLastProduct } from './../../../application/use-cases/products/remove-last-product';
import { RemoveFirstProduct } from './../../../application/use-cases/products/remove-first-product';
import { FindProductByName } from './../../../application/use-cases/products/find-product-by-name';
import { FindProductById } from './../../../application/use-cases/products/find-product-by-id';
import { CreateLastProduct } from './../../../application/use-cases/products/create-last-product';
import { CreateFirstProduct } from './../../../application/use-cases/products/create-first-product';
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { ListProducts } from 'src/application/use-cases/products/list-products';
import { CreateProductBody } from '../dtos/create-product-body';

@Controller('products')
export class ProductsController {
  constructor(
    private createFirstProduct: CreateFirstProduct,
    private createLastProduct: CreateLastProduct,
    private listProducts: ListProducts,
    private findProductById: FindProductById,
    private findProductByName: FindProductByName,
    private removeFirstProduct: RemoveFirstProduct,
    private removeLastProduct: RemoveLastProduct,
    private updateProductById: UpdateProductById,
    private buyProduct: BuyProduct,
  ) {}

  @Post('/createFirst')
  async createFirst(@Body() body: CreateProductBody) {
    const { name, description, imageUrl, price, quantity } = body;

    try {
      const { product } = await this.createFirstProduct.execute({
        name,
        description,
        imageUrl,
        price,
        quantity,
      });

      return { product };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Post('/createLast')
  async createLast(@Body() body: CreateProductBody) {
    const { name, description, imageUrl, price, quantity } = body;

    try {
      const { product } = await this.createLastProduct.execute({
        name,
        description,
        imageUrl,
        price,
        quantity,
      });

      return { product };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Post('/removeFirst')
  async removeFirst() {
    try {
      const { products } = await this.removeFirstProduct.execute();
      return { products };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Post('/removeLast')
  async removeLast() {
    try {
      const { products } = await this.removeLastProduct.execute();
      return { products };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Get('/')
  async list() {
    try {
      const { products } = await this.listProducts.execute();

      return { products };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Get('id/:productId')
  async findProductId(@Param('productId') productId: string) {
    try {
      const { product } = await this.findProductById.execute({
        productId,
      });
      return {
        product,
      };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Get('name/:name')
  async findProductName(@Param('name') name: string) {
    try {
      const { product } = await this.findProductByName.execute({
        name,
      });

      return {
        product,
      };
    } catch (error) {
      return { Error: error.message };
    }
  }

  @Patch(':id')
  async update(
    @Body()
    body: {
      name?: string;
      description?: string;
      imageUrl?: string;
      price?: number;
      quantity?: number;
      createdAt?: Date;
    },
    @Param('id') id: string,
  ) {
    const { name, description, imageUrl, price, quantity, createdAt } = body;

    try {
      await this.updateProductById.execute({
        id,
        name,
        description,
        imageUrl,
        price,
        quantity,
        createdAt,
      });
    } catch (error) {
      return { Error: error.message };
    }

    const { product } = await this.findProductById.execute({
      productId: id,
    });

    return {
      product,
    };
  }

  @Post('buy')
  async buy(@Body() body: { productId: string; quantity: number }) {
    const { productId, quantity } = body;

    try {
      await this.buyProduct.execute({
        productId,
        quantity,
      });

      return { Result: 'Produto comprado com sucesso!' };
    } catch (error) {
      return { Error: error.message };
    }
  }
}
