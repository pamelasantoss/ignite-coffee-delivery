import { OrderInfoContainer, SuccessContainer, SuccessContentSection } from "./styles";

import successImage from "../../assets/success-illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { IconCircle } from "../../styles/default";

export function Success() {
  return (
    <SuccessContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <p>Agora é só aguardar que logo o café chegará até você</p>

      <SuccessContentSection>
        <OrderInfoContainer>
          <ul>
            <li>
              <IconCircle bgColor="purple">
                <MapPin size={20} weight="fill" />
              </IconCircle>
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                <br />Farrapos - Porto Alegre, RS</p>
            </li>
            <li>
              <IconCircle bgColor="yellow">
                <Timer size={20} weight="fill" />
              </IconCircle>
              <p>Previsão de entrega<br />
                <strong>20 min - 30 min</strong></p>
            </li>
            <li>
              <IconCircle bgColor="orange">
                <CurrencyDollar size={20} weight="bold" />
              </IconCircle>
              <p>Pagamento na entrega<br />
                <strong>Cartão de Crédito</strong></p>
            </li>
          </ul>
        </OrderInfoContainer>

        <div id="success-image">
          <img src={successImage} alt="" />
        </div>
      </SuccessContentSection>
    </SuccessContainer>
  );
}