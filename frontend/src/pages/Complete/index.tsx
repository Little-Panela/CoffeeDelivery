import { Counter } from "../../components/Counter";
import {
  AddressCard,
  AddressContainer,
  AddressInput,
  CoffeeCard,
  CompleteContainer,
  ConfirmButton,
  InfoCard,
  CEPInput,
  PaymentCard,
  TotalCard,
  ComplementoInput,
  NumberInput,
  InforBox,
  NeighborhoodInput,
  CityInput,
  BillInput,
  AddressInfoBox,
  PaymentInforBox,
  UserPayment,
  PaymenteContainer,
  Container,
  SelectedCoffeesContainer,
  DetailsContainer,
  ConfirmationSectionContainer,
} from "./styles";
import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from "@phosphor-icons/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatMoney } from "../../util/formatMoney";
import { CoffeeCartCard } from "./components/CoffeeCartCard";
import { api } from "../../services/api";

const DELIVERY_PRICE = 3.5;

export function Complete() {
  const navigate = useNavigate()
  const { cartItemsTotal, cartQuantity, cartItems } = useCart();
  const cartTotal = DELIVERY_PRICE + cartItemsTotal;

  const formattedItemsTotal = formatMoney(cartItemsTotal);
  const formattedDeliveryPrice = formatMoney(DELIVERY_PRICE);
  const formattedCartTotal = formatMoney(cartTotal);

  function buyProduct() {
    try {
      cartItems.map(async (item) => {
        const { id,quantity } = item;

        const product = {
          productId: id,
          quantity,
        };

       await api.post("/products/buy", product);
      });

      console.log("Produto comprado com sucesso");
      navigate("/confirmOrder");
    } catch (error) {
      alert("Erro ao comprar o produto");
      console.error(error)
    }
  }

  return (
    <Container>
      <CompleteContainer>
        <AddressCard>
          <h1>
            {" "}
            <MapPinLine size={20} color="#C47F17" />
            Endereço Completo
          </h1>
          <h2>Informe o endereço onde deseja receber seu pedido</h2>

          <CEPInput placeholder="CEP" />
          <AddressInput placeholder="Rua" />
          <AddressInfoBox>
            <NumberInput placeholder="Número" />
            <ComplementoInput placeholder="Complemento" />
          </AddressInfoBox>
          <InforBox>
            <NeighborhoodInput placeholder="Bairro" />
            <CityInput placeholder="Cidade" />
            <BillInput placeholder="UF" />
          </InforBox>
        </AddressCard>

        <PaymentCard>
          <PaymenteContainer>
            <h3>
              {" "}
              <CurrencyDollar size={20} color="#8047F8" />
              Pagamento
            </h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </PaymenteContainer>
          <PaymentInforBox>
            <UserPayment>
              <h1>
                {" "}
                <CreditCard size={20} color="#8047F8" />
                CARTÃO DE CRÉDITO
              </h1>
            </UserPayment>
            <UserPayment>
              <h1>
                <Bank size={20} color="#8047F8" />
                CARTÃO DE DÉBITO
              </h1>
            </UserPayment>
            <UserPayment>
              <h1>
                <Money size={20} color="#8047F8" />
                DINHEIRO
              </h1>
            </UserPayment>
          </PaymentInforBox>
        </PaymentCard>
      </CompleteContainer>

      <SelectedCoffeesContainer>
        <strong>Cafés selecionados</strong>

        <DetailsContainer>
          {cartItems.map((item) => (
            <CoffeeCartCard key={item.id} coffee={item} />
          ))}

          <ConfirmationSectionContainer>
            <div>
              <p>Total de itens</p>
              <p>R$ {formattedItemsTotal}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {formattedDeliveryPrice}</p>
            </div>
            <div>
              <strong>Total</strong>
              <strong>R$ {formattedCartTotal}</strong>
            </div>

            <button onClick={buyProduct}>
              Finalizar pedido
            </button>
          </ConfirmationSectionContainer>
        </DetailsContainer>
      </SelectedCoffeesContainer>
    </Container>
  );
}
