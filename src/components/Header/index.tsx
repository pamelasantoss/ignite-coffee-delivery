import {
  ActionButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton
} from "./styles";
import { Container } from "../../styles/default";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

export function Header() {
  return (
    <HeaderContainer>
      <Container>
        <div className="row">
          <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />

          <ActionButtonsContainer>
            <LocationButton>
              <MapPin size={20} weight="fill" />
              Porto Alegre, RS
            </LocationButton>
            
            <CartButton><ShoppingCart size={20} weight="fill" /></CartButton>
          </ActionButtonsContainer>
        </div>
      </Container>
    </HeaderContainer>
  );
}