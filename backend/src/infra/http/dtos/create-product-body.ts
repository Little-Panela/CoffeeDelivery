import { IsNotEmpty, IsUrl, Length } from 'class-validator';

export class CreateProductBody {
  @IsNotEmpty()
  @Length(1, 30)
  name: string;

  @IsNotEmpty()
  @Length(10, 240)
  description: string;

  @IsNotEmpty()
  @Length(1, 300)
  @IsUrl()
  imageUrl: string;

  @IsNotEmpty()
  price: number;

  @IsNotEmpty()
  quantity: number;
}
