import React, { Component } from "react";
import "./ProductsList.css";
import { ProductConsumer } from "../contexts/Contexts";
import Product from "./Product";

export default class ProductsList extends Component {
  constructor(props) {
    super(props);
    this.state = { selected: "a", btnSelected: "all" };
  }

  render() {
    return (
      <ProductConsumer>
        {(value) => {
          return (
            <main>
              <section className="main-select">
                <div className="main-select-filter">
                  <p>Select filter:</p>
                  <div className="main-select-filter-btn">
                    <button
                      className={
                        this.state.btnSelected === "all"
                          ? "main-select-filter-btn-Active"
                          : ""
                      }
                      onClick={() => this.setState({ btnSelected: "all" })}
                    >
                      all
                    </button>
                    <button
                      className={
                        this.state.btnSelected === "electronics"
                          ? "main-select-filter-btn-Active"
                          : ""
                      }
                      onClick={() =>
                        this.setState({ btnSelected: "electronics" })
                      }
                    >
                      electronics
                    </button>
                    <button
                      className={
                        this.state.btnSelected === "jewelery"
                          ? "main-select-filter-btn-Active"
                          : ""
                      }
                      onClick={() => this.setState({ btnSelected: "jewelery" })}
                    >
                      jewelery
                    </button>
                    <button
                      className={
                        this.state.btnSelected === "men's clothing"
                          ? "main-select-filter-btn-Active"
                          : ""
                      }
                      onClick={() =>
                        this.setState({ btnSelected: "men's clothing" })
                      }
                    >
                      men's clothing
                    </button>
                    <button
                      className={
                        this.state.btnSelected === "women's clothing"
                          ? "main-select-filter-btn-Active"
                          : ""
                      }
                      onClick={() =>
                        this.setState({ btnSelected: "women's clothing" })
                      }
                    >
                      weomen's clouthing
                    </button>
                  </div>
                </div>

                <label className="main-select-select">
                  Sort by:
                  <select
                    onChange={(e) => {
                      value.filterDataFunc(e.target.value);
                      this.setState({ selected: e.target.value });
                    }}
                    value={this.state.selected}
                  >
                    <option value="a">A - Z</option>
                    <option value="z">Z - A</option>
                    <option value="up">Price: Low to High</option>
                    <option value="down">Price: Hight to Low</option>
                  </select>
                </label>
              </section>
              {value.loading ? (
                <p>Loading...</p>
              ) : (
                <div className="main-productList">
                  {value.productData.map((item) => {
                    return (
                      <>
                        {(this.state.btnSelected === item.category ||
                          this.state.btnSelected === "all") && (
                          <Product key={item.id} item={item} />
                        )}
                      </>
                    );
                  })}
                </div>
              )}
            </main>
          );
        }}
      </ProductConsumer>
    );
  }
}
