import { OrderInfoContainer, SuccessContainer, SuccessContentSection } from "./styles";

import successImage from "../../assets/success-illustration.svg";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { IconCircle } from "../../styles/default";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Success() {
  const { address, payment } = useContext(CartContext);

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
              <p>Entrega em <strong>{address?.street}, {address?.number}</strong>
                {address?.complement && (
                  <>
                    <br />{address?.complement}
                  </>
                )}
                <br />{address?.neighbour} - {address?.city}, {address?.uf}</p>
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
                <strong>{payment}</strong></p>
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