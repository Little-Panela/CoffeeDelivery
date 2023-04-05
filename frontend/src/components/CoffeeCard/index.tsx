// import { QuantityInput } from '../QuantityInput'
// import { RegularText, TitleText } from '../Typography'
import {
  CoffeeCardContainer,
  // Tags,
  Name,
  Description,
  CardFooter,
  AddCartWrapper,
} from "./ styles";
import { ShoppingCart } from "phosphor-react";
import { useCart } from '../../hooks/useCart'
import { useState } from "react";
import { QuantityInput } from "../QuantityInput";

export interface Coffee {
  id: number;
  // tags: string[]
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  quantity: number;
}

interface CoffeeProps {
  coffee: Coffee;
}

// import aaa from "../../assets/Imagetradicional.png"

export function CoffeeCard({ coffee }: CoffeeProps) {
  const { addCoffeeToCart } = useCart()

  const [quantity, setQuantity] = useState(1);

  function handleIncrease() {
    if (coffee.quantity < quantity) {
      return alert("O produto não tem estoque suficiente");
    }

    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  function handleAddToCart() {
    const coffeeToAdd = {
      ...coffee,
      quantity,
    };

    addCoffeeToCart(coffeeToAdd)

    setQuantity(1);
  }

  const formattedPrice = coffee.price.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
  });

  return (
    <CoffeeCardContainer>
      <img src={coffee.imageUrl} alt="" />

      {/* <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags> */}

      <Name>{coffee.name}</Name>
      <Description>{coffee.description}</Description>

      <CardFooter>
        <div>
          <p style={{
            fontFamily: 'Roboto',
            fontStyle: '400',
            fontSize: '14px',
          }}>R$</p>
          <p
            style={{
              fontFamily: 'Baloo 2',
              fontStyle: '800',
              fontSize: '24px',
            }}
          >{formattedPrice}</p>
        </div>

        <AddCartWrapper>
          {coffee.quantity > 0 ? (
            <>
              <QuantityInput
                onIncrease={handleIncrease}
                onDecrease={handleDecrease}
                quantity={quantity}
              />
              <button onClick={handleAddToCart}>
                <ShoppingCart weight="fill" size={22} />
              </button>
            </>
          ) : (
            <h5>Indisponível</h5>
          )}
        </AddCartWrapper>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
