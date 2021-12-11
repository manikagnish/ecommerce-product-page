import { useState, useContext } from "react";
import { Context } from "../Context";

import {
  StyledNavbar,
  StyledNav,
  Overlay,
  StyledCart,
  Hamburger,
  Avatar,
} from "./styles/Navbar.styled";

import { Row } from "./styles/Flex.styled";
import Cart from "./Cart";

export default function Navbar() {
  const [display, setDisplay] = useState("none");
  const [translate, setTranslate] = useState("-100%");

  const { showCart, showCount } = useContext(Context);
  const [displayCart, setDisplayCart] = showCart;
  const [count] = showCount;

  return (
    <StyledNavbar>
      <Hamburger
        src="./images/icon-menu.svg"
        alt="hamburger menu"
        onClick={() => {
          setDisplay("block");
          setTranslate("0");
        }}
      />
      <a href="/ecommerce-product-page" className="logo">
        <img src="./images/logo.svg" alt="logo" />
      </a>
      <Overlay display={display} />
      <StyledNav translate={translate}>
        <Hamburger
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

      <Row>
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
        <Avatar
          className="profile-img"
          src="./images/image-avatar.png"
          alt="user profile"
        />
      </Row>
      <Cart display={displayCart} />
    </StyledNavbar>
  );
}
