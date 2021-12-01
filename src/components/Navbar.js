import { StyledNavbar, StyledNav, Overlay } from "./styles/Navbar.styled";

export default function Navbar() {
  return (
    <StyledNavbar>
      <img src="./images/icon-menu.svg" alt="hamburger menu" />
      <img src="./images/logo.svg" alt="logo" />
      <img src="./images/icon-cart.svg" alt="shopping cart" />
      <img src="./images/image-avatar.png" alt="user profile" />

      <Overlay />

      <StyledNav>
        <img src="./images/icon-close.svg" alt="close" />
        <ul>
          <li>
            <a href="/ecommerce-product-page">Collections</a>
          </li>
          <li>
            <a href="/ecommerce-product-page">Men</a>
          </li>
          <li>
            <a href="/ecommerce-product-page">Women</a>
          </li>
          <li>
            <a href="/ecommerce-product-page">About</a>
          </li>
          <li>
            <a href="/ecommerce-product-page">Contact</a>
          </li>
        </ul>
      </StyledNav>
    </StyledNavbar>
  );
}
