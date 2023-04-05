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
import { CoffeeCardDashboard } from "../../components/CoffeeCardDashboard";

export function Dashboard() {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  const [produto, setProduto] = useState({} as Coffee);

  useEffect(() => {
    api.get("products").then((response) => setCoffees(response.data.products));
  }, []);

  async function removeFirst() {
    await api.post(`products/removeFirst`);
    window.location.reload();
  }

  async function removeLast() {
    await api.post(`products/removeLast`);
    window.location.reload();
  }

  async function addFirst() {
    await api.post(`products/createFirst`, produto);
    window.location.reload();
  }

  async function addLast() {
    await api.post(`products/createLast`, produto);
    window.location.reload();
  }

  return (
    <HomeContainer>
      <HomeWrapper>
        <TextField>
          <HeaderWrapper>
            <strong>Dashboard</strong>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </HeaderWrapper>

          {/* <ItemsWrapper>
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
          </ItemsWrapper> */}
        </TextField>

        {/* <img src={coffeImage} alt="" /> */}
      </HomeWrapper>

      <StoreWrapper>
        <div
          style={{
            display: "flex",
            gap: "1rem",
          }}
        >
          <button
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#8047F8",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={removeFirst}
          >
            Remover Primeiro Produto
          </button>
          <button
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#8047F8",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={removeLast}
          >
            Remover Ultimo Produto
          </button>
        </div>
        <h2>Produtos</h2>

        {!coffees && <p>Carregando...</p>}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "5rem",
          }}
        >
          {coffees &&
            coffees.map((item) => (
              <CoffeeCardDashboard key={item.id} coffee={item} />
            ))}
        </div>
      </StoreWrapper>

      <StoreWrapper>
        <h2>Adicionar Produtos</h2>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            width: "20%",
            marginTop: "-4rem",
          }}
        >
          <input
            type="text"
            placeholder="Nome do produto"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#DBAC2C",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onChange={(e) => setProduto({ ...produto, name: e.target.value })}
          />

          <input
            type="text"
            placeholder="Descrição"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#DBAC2C",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onChange={(e) => setProduto({ ...produto, description: e.target.value })}
          />

          <input
            type="text"
            placeholder="Image"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#DBAC2C",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onChange={(e) => setProduto({ ...produto, imageUrl: e.target.value })}
          />

          <input
            type="text"
            placeholder="Preço"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#DBAC2C",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onChange={(e) => setProduto({ ...produto, price: Number(e.target.value) })}
          />

          <input
            type="number"
            placeholder="Quantidade"
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#DBAC2C",
              color: "#000",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onChange={(e) => setProduto({ ...produto, quantity: Number(e.target.value) })}
          />
        </div>

        <div
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "2rem",
          }}
        >
          <button
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#8047F8",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={addFirst}
          >
            Adicionar Produto Primeiro
          </button>
          <button
            style={{
              padding: "1rem",
              borderRadius: "0.5rem",
              border: "none",
              background: "#8047F8",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
            onClick={addLast}
          >
            Adicionar Produto Ultimo
          </button>
        </div>
      </StoreWrapper>
    </HomeContainer>
  );
}
