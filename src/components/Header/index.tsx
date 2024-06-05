import { Container } from "../../styles/default";
import {
  ActionButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function Header() {
  const { cart } = useContext(CartContext);

  const navigate = useNavigate();

  function handleCheckoutButton() {
    navigate("/checkout");
  }

  return (
    <HeaderContainer>
      <Container>
        <div className="row">
          <Link to="/">
            <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
          </Link>

          <ActionButtonsContainer>
            <LocationButton>
              <MapPin size={20} weight="fill" />
              Porto Alegre, RS
            </LocationButton>
            
            <CartButton type="button" onClick={handleCheckoutButton}>
              {cart.length > 0 && <span>{cart.length}</span>}
              <ShoppingCart size={20} weight="fill" />
            </CartButton>
          </ActionButtonsContainer>
        </div>
      </Container>
    </HeaderContainer>
  );
}