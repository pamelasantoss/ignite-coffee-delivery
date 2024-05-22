import {
  CheckoutContainer,
  CheckoutInfoContainer,
  CheckoutLeftContainer,
  CheckoutRightContainer
} from "./styles";

export function Checkout() {
  return (
    <CheckoutContainer>
      <CheckoutLeftContainer>
        <h2>Complete seu pedido</h2>

        <CheckoutInfoContainer>
          Endereço
        </CheckoutInfoContainer>

        <CheckoutInfoContainer>
          Opções de pagamento
        </CheckoutInfoContainer>
      </CheckoutLeftContainer>

      <CheckoutRightContainer>
        <h2>Cafés selecionados</h2>

        <CheckoutInfoContainer>
          Resumo do pedido
        </CheckoutInfoContainer>
      </CheckoutRightContainer>
    </CheckoutContainer>
  );
} 