import { Replace } from 'src/helpers/Replace';
import { randomUUID } from 'node:crypto';

export interface ProductProps {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
  createdAt: Date;
}

export class Product {
  private _id: string;
  private props: ProductProps;
  private validateNameLength(name: string): boolean {
    return name.length >= 1 && name.length <= 30;
  }
  private validateDescriptionLength(description: string): boolean {
    return description.length >= 10 && description.length <= 240;
  }

  constructor(props: Replace<ProductProps, { createdAt?: Date }>, id?: string) {
    if (!this.validateNameLength(props.name)) {
      throw new Error('Nome do produto deve ter entre 1 e 30 caracteres');
    }
    if (!this.validateDescriptionLength(props.description)) {
      throw new Error(
        'Descrição do produto deve ter entre 10 e 240 caracteres',
      );
    }

    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      quantity: props.quantity ?? 0,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public get id() {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get description(): string {
    return this.props.description;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public get price(): number {
    return this.props.price;
  }

  public set imageUrl(imageUrl: string) {
    this.props.imageUrl = imageUrl;
  }

  public get imageUrl(): string {
    return this.props.imageUrl;
  }

  public set quantity(quantity: number) {
    this.props.quantity = quantity;
  }

  public get quantity(): number {
    return this.props.quantity;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }

  public update(
    props: Replace<
      ProductProps,
      {
        name?: string;
        description?: string;
        imageUrl?: string;
        price?: number;
        quantity?: number;
        createdAt?: Date;
      }
    >,
  ) {
    if (props.name) {
      this.props.name = props.name;
    }

    if (props.description) {
      this.props.description = props.description;
    }

    if (props.imageUrl) {
      this.props.imageUrl = props.imageUrl;
    }

    if (props.price) {
      this.props.price = props.price;
    }

    if (props.quantity !== undefined) {
      this.props.quantity = props.quantity;
    }

    if (props.createdAt) {
      this.props.createdAt = props.createdAt;
    }
  }
}
