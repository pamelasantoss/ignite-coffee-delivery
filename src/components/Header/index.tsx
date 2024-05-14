import { ActionButtonsContainer, HeaderContainer } from "./styles";
import { Container } from "../../styles/default";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <div className="row">
          <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />

          <ActionButtonsContainer>
            <button>Location</button>
            <button>Cart</button>
          </ActionButtonsContainer>
        </div>
      </Container>
    </HeaderContainer>
  );
}