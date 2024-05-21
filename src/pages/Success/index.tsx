import { OrderInfoContainer, SuccessContainer, SuccessContentSection } from "./styles";

import successImage from "../../assets/success-illustration.svg";
import { Timer } from "@phosphor-icons/react";

export function Success() {
  return (
    <SuccessContainer>
      <SuccessContentSection>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>

        <OrderInfoContainer>
          <ul>
            <li>
              <Timer size={32} weight="fill" />
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />Farrapos - Porto Alegre, RS</p>
            </li>
            <li>
              <Timer size={32} weight="fill" />
              <p>Previsão de entrega<br />
                <strong>20 min - 30 min</strong></p>
            </li>
            <li>
              <Timer size={32} weight="fill" />
              <p>Pagamento na entrega<br />
                <strong>Cartão de Crédito</strong></p>
            </li>
          </ul>
        </OrderInfoContainer>
      </SuccessContentSection>

      <div id="success-image">
        <img src={successImage} alt="" />
      </div>
    </SuccessContainer>
  );
}