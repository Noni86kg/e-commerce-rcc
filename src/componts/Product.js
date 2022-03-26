import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { ProductConsumer } from "../contexts/Contexts";

export default class Product extends Component {
  render() {
    const { title, price, id, image } = this.props.item;

    return (
      <div className="main-product">
        <ProductConsumer>
          {(value) => {
            return (
              <>
                <Link
                  to={`/details/:${id}`}
                  onClick={() => value.handleDetailsID(id)}
                >
                  <img src={image} alt={title} />
                </Link>
                <div className="main-product-info">
                  <h3>{title}</h3>
                  <p>${price}</p>
                  {value.cartData.some((cardID) => cardID.id === id) ? (
                    <button className="takenItemBtn">
                      {title} IN YOUR CART
                    </button>
                  ) : (
                    <button onClick={() => value.addToCart(id)}>
                      ADD TO CART
                      <BsFillCartFill />
                    </button>
                  )}
                </div>
              </>
            );
          }}
        </ProductConsumer>
      </div>
    );
  }
}
