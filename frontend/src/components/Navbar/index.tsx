import {
  Counter,
  LocationContainer,
  MenuWrapper,
  NavbarContainer,
} from "./styles";

import Logo from "../../assets/logo-coffee-delivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useCart } from "../../hooks/useCart";

export function Navbar() {
  const { cartQuantity } = useCart();

  return (
    <NavbarContainer>
      <NavLink to="/" title="Home">
        <img src={Logo} alt="" />
      </NavLink>

      <MenuWrapper>
        <LocationContainer>
          <MapPin size={22} weight="fill" />
          <p>Belém, PA</p>
        </LocationContainer>

        <NavLink to="/cart" title="Carrinho">
          {/* <Counter><strong></strong></Counter> */}
          {cartQuantity >= 1 && (
            <Counter>
              <strong>{cartQuantity}</strong>
            </Counter>
          )}
          <ShoppingCart size={22} weight="fill" />
        </NavLink>
      </MenuWrapper>
    </NavbarContainer>
  );
}
