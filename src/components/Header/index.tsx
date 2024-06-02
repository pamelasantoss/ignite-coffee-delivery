import { Container } from "../../styles/default";
import {
  ActionButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();

  function handleCheckoutButton() {
    navigate("/checkout");
  }

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
            
            <CartButton type="button" onClick={handleCheckoutButton}>
              <ShoppingCart size={20} weight="fill" />
            </CartButton>
          </ActionButtonsContainer>
        </div>
      </Container>
    </HeaderContainer>
  );
}