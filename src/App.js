import React, { Component } from "react";
import Header from "./componts/Header";
import ProductsList from "./componts/ProductsList";
import { Routes, Route } from "react-router-dom";
import Details from "./componts/Details";
import Cart from "./componts/Cart";
import Error404 from "./componts/Error404";

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Routes>
          <Route path="/" element={<ProductsList />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </>
    );
  }
}
