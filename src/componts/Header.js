import React, { Component } from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { BsFillCartFill } from "react-icons/bs";
import "./Header.css";
import { ProductConsumer } from "../contexts/Contexts";

export default class Header extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <header>
              <Link to="/">
                <BsFillHouseFill />
              </Link>

              <Link to="/cart">
                <BsFillCartFill />
                <span>{value.cartData.length}</span>
              </Link>
            </header>
          );
        }}
      </ProductConsumer>
    );
  }
}
