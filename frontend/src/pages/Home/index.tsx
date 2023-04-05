import {
  HeaderWrapper,
  HomeContainer,
  HomeWrapper,
  Item,
  ItemsWrapper,
  StoreWrapper,
  TextField,
} from "./styles";

import coffeImage from "../../assets/coffee-image.png";
import {
  Coffee as CoffeeIcon,
  Package,
  ShoppingCart,
  Timer,
} from "phosphor-react";
import { Coffee, CoffeeCard } from "../../components/CoffeeCard";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    api.get("products").then((response) => setCoffees(response.data.products));
  }, []);
  return (
    <HomeContainer>
      <HomeWrapper>
        <TextField>
          <HeaderWrapper>
            <strong>Encontre o café perfeito para qualquer hora do dia</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeaderWrapper>

          <ItemsWrapper>
            <Item color="#C47F17">
              <div>
                <ShoppingCart size={16} weight="fill" />
              </div>
              <p>Compra simples e segura</p>
            </Item>

            <Item color="#DBAC2C">
              <div>
                <Package size={16} weight="fill" />
              </div>
              <p>Embalagem mantém o café intacto</p>
            </Item>

            <Item color="#574F4D">
              <div>
                <Timer size={16} weight="fill" />
              </div>
              <p>Entrega rápida e rastreada</p>
            </Item>

            <Item color="#8047F8">
              <div>
                <CoffeeIcon size={16} weight="fill" />
              </div>
              <p>O café chega fresquinho até você</p>
            </Item>
          </ItemsWrapper>
        </TextField>

        <img src={coffeImage} alt="" />
      </HomeWrapper>

      <StoreWrapper>
        <h2>Nossos cafés</h2>

        {!coffees && <p>Carregando...</p>}

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
          gap: '5rem'
        }}>
          {coffees &&
            coffees.map((item) => <CoffeeCard key={item.id} coffee={item} />)}
        </div>
      </StoreWrapper>
    </HomeContainer>
  );
}
