import { useState, useContext } from "react";
import { Context } from "../Context";

import {
  StyledNavbar,
  StyledNav,
  Overlay,
  StyledCart,
} from "./styles/Navbar.styled";
import Cart from "./Cart";

export default function Navbar() {
  const [display, setDisplay] = useState("none");
  const [translate, setTranslate] = useState("-100%");

  const { showCart, showCount } = useContext(Context);
  const [displayCart, setDisplayCart] = showCart;
  const [count] = showCount;

  return (
    <StyledNavbar>
      <img
        src="./images/icon-menu.svg"
        alt="hamburger menu"
        onClick={() => {
          setDisplay("block");
          setTranslate("0");
        }}
      />
      <img src="./images/logo.svg" alt="logo" />
      <StyledCart count={count === 0 ? null : count}>
        <img
          className="cart"
          src="./images/icon-cart.svg"
          alt="shopping cart"
          onClick={() => {
            setDisplayCart(!displayCart);
          }}
        />
      </StyledCart>
      <img
        className="profile-img"
        src="./images/image-avatar.png"
        alt="user profile"
      />

      <Cart display={displayCart} />

      <Overlay display={display} />

      <StyledNav translate={translate}>
        <img
          src="./images/icon-close.svg"
          alt="close"
          onClick={() => {
            setDisplay("none");
            setTranslate("-100%");
          }}
        />
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
