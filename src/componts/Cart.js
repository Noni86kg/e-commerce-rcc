import React, { Component } from "react";
import "./Cart.css";
import { ProductConsumer } from "../contexts/Contexts";

export default class Cart extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <div className="cart">
              {value.cartData.map((item) => {
                return (
                  <div className="cart-item">
                    <div className="cart-item-left">
                      <div className="cart-image">
                        <img src={item.image} alt={item.title} />
                      </div>
                      <h2>{item.title}</h2>
                    </div>
                    <div className="cart-item-right">
                      <div className="cart-plus-minus-price">
                        <button
                          className="plus-btn"
                          onClick={() => value.handleitemQuantityPlus(item)}
                        >
                          +
                        </button>
                        <button
                          className="minus-btn"
                          onClick={() => value.handleitemQuantityMinus(item)}
                        >
                          -
                        </button>
                        <p>
                          {item.quantity} x ${item.price} =
                          <b> ${item.quantity * item.price}</b>
                        </p>
                      </div>
                      <button onClick={() => value.handleClearItem(item.id)}>
                        Clear Item
                      </button>
                    </div>
                  </div>
                );
              })}
              {value.cartData.length > 0 ? (
                <div className="cart-total">
                  <button onClick={() => value.handleClearcartData()}>
                    Clear Cart
                  </button>
                  <p>
                    Total:{" "}
                    <b>
                      ${" "}
                      {value.cartData
                        .reduce(
                          (price, item) => price + item.quantity * item.price,
                          0
                        )
                        .toFixed(2)}
                    </b>
                  </p>
                </div>
              ) : (
                <div className="cart-empty ">
                  <h2>Shopping Cart is Empty</h2>
                </div>
              )}
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
