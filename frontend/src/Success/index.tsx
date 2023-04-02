import { CurrencyCircleDollar, MapPinLine, Timer } from "@phosphor-icons/react";
import { ClientInfo, SuccessBox } from "./styles";

export function Success() {
  return (
    <SuccessBox>
      <h1>Uhu! Pedido confirmado </h1>
      <h2>Agora é só aguardar que logo o café chegará até você </h2>
      <ClientInfo>
        <h3>
          <MapPinLine size={20} color="#8047F8" /> Entrega em Rua João Daniel Martinelli,
          102Farrapos - Porto Alegre, RS
        </h3>
        <h3>
          <Timer size={20} color="#DBAC2C"/>
          Previsão de entrega: 20 min - 30 min
        </h3>
        <h3>
          <CurrencyCircleDollar size={20} color="#C47F17" />
          Pagamento na entrega: Cartão de Crédito
        </h3>
      </ClientInfo>
    </SuccessBox>
  );
}
