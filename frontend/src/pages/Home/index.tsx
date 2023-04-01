

import { Counter } from "../../components/Counter";
import {
  
  HomeContainer,
  HomeTextField,
  HomeWrapper,
 
  ItensContainer,
  ItensWrapper,

  CoffeeContainer,

  CoffeeWrapper,
  TypeBox,

  RowContainer,
  TypeBox2,
 
} from "./styles";
// import { Coffee } from "@phosphor-icons/react";



export function Home() {
 
  return (
    <HomeContainer>
      <HomeWrapper>
        <HomeTextField>
          <h1>ENCONTRE O CAFÉ PERFEITO PARA QUALQUER HORA DO DIA!</h1>

          <span>
            Com o Coffee Delivery você recebe o seu café onde estiver, a
            qualquer hora.
          </span>
     
        </HomeTextField>
        

        <ItensContainer>
          <ItensWrapper>
            <p>Compra simples e segura</p>
            <p>Entrega rápida e rastreada</p>
          </ItensWrapper>
          <ItensWrapper>
            <p>Embalagem mantém o café intacto</p>
            <p>
            {/* <Coffee size={32} /> */}
            O café chega fresquinho até você</p>
          </ItensWrapper>
        </ItensContainer>

        <CoffeeContainer>
          <span>Nossos cafés</span>

          <ItensContainer>
            <CoffeeWrapper>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <h5>Expresso Tradicional</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
       
              </RowContainer>
            </CoffeeWrapper>

            <CoffeeWrapper>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <h5>Expresso Americano</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>

            <CoffeeWrapper>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <h5>Expresso Cremoso</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>

            <CoffeeWrapper>
              <RowContainer>
            <TypeBox2>
                <a>TRADICIONAL</a>
              </TypeBox2>
              <TypeBox2>
                <a>TRADICIONAL</a>
              </TypeBox2>
              </RowContainer>
              <h5>Expresso Gelado</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>
          </ItensContainer>

          <ItensContainer>
            <CoffeeWrapper>
            <ItensContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </ItensContainer>
              <h5>Café com Leite</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <ItensContainer>
              <span>R$9,90</span>
              <Counter/>
              </ItensContainer>
            </CoffeeWrapper>

            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Latte</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>


            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Cappuccino</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>


            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Macciato</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>
          </ItensContainer>

          <ItensContainer>
            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Mocaccino</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>
            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Chocolate Quente</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>


            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Cubano</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>


            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Havaiano</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>
          </ItensContainer>

          <ItensContainer>
            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Árabe</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>


            <CoffeeWrapper>
            <RowContainer>
            <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              <TypeBox>
                <a>TRADICIONAL</a>
              </TypeBox>
              </RowContainer>
              <h5>Irlandês</h5>
              <h4>O tradicional café feito com água quente e grãos moídos</h4>
              <RowContainer>
              <span>R$9,90</span>
              <Counter/>
              </RowContainer>
            </CoffeeWrapper>
          </ItensContainer>
        </CoffeeContainer>
      </HomeWrapper>
    </HomeContainer>
  );
}
