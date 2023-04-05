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
import { useCart } from "../../hooks/useCart";
import { useState } from "react";
import { QuantityInput } from "../QuantityInput";
import { api } from "../../services/api";

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

export function CoffeeCardDashboard({ coffee }: CoffeeProps) {
  const [quantity, setQuantity] = useState(coffee.quantity);

  function handleIncrease() {
    setQuantity((state) => state + 1);
  }

  function handleDecrease() {
    setQuantity((state) => state - 1);
  }

  async function handleAddToCart() {
    await api.patch(`products/${coffee.id}`, {
      quantity,
    })
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
          <p
            style={{
              fontFamily: "Roboto",
              fontStyle: "400",
              fontSize: "14px",
            }}
          >
            R$
          </p>
          <p
            style={{
              fontFamily: "Baloo 2",
              fontStyle: "800",
              fontSize: "24px",
            }}
          >
            {formattedPrice}
          </p>
        </div>

        <AddCartWrapper>
          <QuantityInput
            onIncrease={handleIncrease}
            onDecrease={handleDecrease}
            quantity={quantity}
          />
        </AddCartWrapper>
          <button onClick={handleAddToCart}>Atualizar</button>
      </CardFooter>
    </CoffeeCardContainer>
  );
}
