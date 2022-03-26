import React, { Component } from "react";
import { ProductConsumer } from "../contexts/Contexts";
import "./Details.css";
import { BsFillCartFill } from "react-icons/bs";

export default class Details extends Component {
  constructor(props) {
    super(props);
    this.setState = {};
  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="details">
              <div className="details-image">
                <img
                  src={value.detailsItem.image}
                  alt={value.detailsItem.title}
                />
              </div>
              <div className="details-info">
                <h3>{value.detailsItem.title}</h3>
                <p>{value.detailsItem.description}</p>
                <div className="details-info-price-rating">
                  <p>
                    <b>${value.detailsItem.price}</b>
                  </p>
                  <p>Rating: {value.detailsItem.rating.rate}</p>
                </div>
                {/* <button>
                  ADD TO CART
                  <BsFillCartFill />
                </button> */}
                {value.cartData.some(
                  (cardID) => cardID.id === value.detailsItem.id
                ) ? (
                  <button className="takenItemBtn">
                    {value.detailsItem.title} IN YOUR CART
                  </button>
                ) : (
                  <button onClick={() => value.addToCart(value.detailsItem.id)}>
                    ADD TO CART
                    <BsFillCartFill />
                  </button>
                )}
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
