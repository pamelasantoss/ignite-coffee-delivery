import { Container } from "../../styles/default";
import {
  ActionButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
  SpinningIcon
} from "./styles";

import coffeeDeliveryLogo from "../../assets/coffee-delivery-logo.svg";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import { useLocation } from "../../contexts/LocationContext";
import toast, { Toaster } from "react-hot-toast";

export function Header() {
  const { cart } = useContext(CartContext);
  const [isToastedLoaded, setIsToastedLoaded] = useState(false);
  const { location, isLoading, locationError } = useLocation();

  const navigate = useNavigate();

  function handleCheckoutButton() {
    navigate("/checkout");
  }

  function handleLocationInfo() {
    if (locationError !== "") {
      toast.error(locationError);
    } else {
      toast.success("Sua localização está ativa!");
    }
  }

  useEffect(() => {
    if (!isToastedLoaded && locationError !== "") {
      setIsToastedLoaded(true);
      toast.error(locationError);
    }
  }, [isToastedLoaded, locationError]);

  return (
    <HeaderContainer>
      <Container>
        <div className="row">
          <Link to="/">
            <img src={coffeeDeliveryLogo} alt="Coffee Delivery" />
          </Link>

          <ActionButtonsContainer>
            <LocationButton onClick={handleLocationInfo}>
              {isLoading || !location ? <SpinningIcon size={20} /> : (
                <>
                  <MapPin size={20} weight="fill" />
                  {location.city}, {location.state}
                </>
              )}              
            </LocationButton>
            <Toaster />
            
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