import { Counter } from "../../components/Counter";
import { AddressCard, AddressContainer, AddressInput, CoffeeCard, CompleteContainer, ConfirmButton, InfoCard, CEPInput, PaymentCard, TotalCard, ComplementoInput, NumberInput, InforBox, NeighborhoodInput, CityInput, BillInput, AddressInfoBox, PaymentInforBox, UserPayment, PaymenteContainer } from "./styles";

export function Complete(){
  return(
    <CompleteContainer>
            <AddressCard>
        <h1>Endereço Completo</h1>
        <h2>Informe o endereço onde deseja receber seu pedido</h2>
        <CEPInput/>
        <AddressInput/>
        <AddressInfoBox>
        <NumberInput/>
        <ComplementoInput/>
        </AddressInfoBox>
        <InforBox>
        <NeighborhoodInput/>
        <CityInput/>
        <BillInput/>
      </InforBox>
      </AddressCard>

      
      <PaymentCard>
        
        <PaymenteContainer>
          <h3> <CurrencyDollar size={32} />Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </PaymenteContainer>
          <PaymentInforBox>
          <UserPayment>
            <h1>CARTÃO DE CRÉDITO</h1>
          </UserPayment>
          <UserPayment>
          <h1>CARTÃO DE CRÉDITO</h1>
          </UserPayment>
          <UserPayment>
          <h1>CARTÃO DE CRÉDITO</h1>
          </UserPayment>
          </PaymentInforBox>
      
      </PaymentCard>
   
    

      <CoffeeCard>
        <InfoCard>
          <h1>ExpressoTradicional</h1>
         <Counter/>
        </InfoCard>
        <TotalCard></TotalCard>
        <ConfirmButton>
          <h2>Confirmar Pedido</h2>
        </ConfirmButton>
      </CoffeeCard>
    </CompleteContainer>
  )
}