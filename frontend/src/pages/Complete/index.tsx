import { Counter } from "../../components/Counter";
import { AddressCard, AddressContainer, AddressInput, CoffeeCard, CompleteContainer, ConfirmButton, InfoCard, CEPInput, PaymentCard, TotalCard, ComplementoInput, NumberInput, InforBox, NeighborhoodInput, CityInput, BillInput, AddressInfoBox, PaymentInforBox, UserPayment, PaymenteContainer, } from "./styles";
import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money} from "@phosphor-icons/react"
export function Complete(){
  return(
    <CompleteContainer>
            <AddressCard>
        <h1> <MapPinLine size={20} color="#C47F17"/>Endereço Completo</h1>
        <h2>Informe o endereço onde deseja receber seu pedido</h2>

  
        <CEPInput
        placeholder="CEP"/>
        <AddressInput
        placeholder="Rua"/>
        <AddressInfoBox>
        <NumberInput
        placeholder="Número"/>
        <ComplementoInput
        placeholder="Complemento"/>
        </AddressInfoBox>
        <InforBox>
        <NeighborhoodInput
        placeholder="Bairro"/>
        <CityInput
        placeholder="Cidade"/>
        <BillInput
        placeholder="UF"/>
      </InforBox>

      </AddressCard>

      
      <PaymentCard>
        
        <PaymenteContainer>
          <h3> <CurrencyDollar size={20} color="#8047F8" />Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
          </PaymenteContainer>
          <PaymentInforBox>
          <UserPayment>
            <h1> <CreditCard size={20} color="#8047F8"/>CARTÃO DE CRÉDITO</h1>
          </UserPayment>
          <UserPayment>
          <h1><Bank size={20} color="#8047F8" />

CARTÃO DE DÉBITO</h1>
          </UserPayment>
          <UserPayment>
          <h1><Money size={20} color="#8047F8"  />DINHEIRO</h1>
          </UserPayment>
          </PaymentInforBox>
      
      </PaymentCard>
   
    

      {/* <CoffeeCard>
        <InfoCard>
          <h1>ExpressoTradicional</h1>
         <Counter/>
        </InfoCard>
        <TotalCard></TotalCard>
        <ConfirmButton>
          <h2>Confirmar Pedido</h2>
        </ConfirmButton>
      </CoffeeCard> */}
    </CompleteContainer>
  )
}