import React, { Component } from "react";
const axios = require("axios");
const ProductContext = React.createContext();

class ProductProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productData: [],
      loading: false,
      detailsItem: [],
      cartData: [],
    };
  }

  filterData = (value, data) => {
    let dataFilter;
    if (!data) {
      dataFilter = this.state.productData;
    } else {
      dataFilter = data;
    }

    if (value === "a") {
      dataFilter.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
      });

      this.setState({ productData: dataFilter });
    } else if (value === "z") {
      dataFilter.sort((a, b) => {
        if (a.title > b.title) return -1;
        if (a.title < b.title) return 1;
      });

      this.setState({ productData: dataFilter });
    } else if (value === "up") {
      dataFilter.sort((a, b) => {
        if (a.price > b.price) return 1;
        if (a.price < b.price) return -1;
      });

      this.setState({ productData: dataFilter });
    } else if (value === "down") {
      dataFilter.sort((a, b) => {
        if (a.price > b.price) return -1;
        if (a.price < b.price) return 1;
      });

      this.setState({ productData: dataFilter });
    }
  };

  handleDetailsID = (id) => {
    this.setState({
      detailsItem: this.state.productData.find((item) => item.id === id),
    });
  };

  addToCart = (id) => {
    this.setState({
      cartData: [
        ...this.state.cartData,
        {
          ...this.state.productData.find((item) => item.id === id),
          quantity: 1,
        },
      ],
    });
  };

  handleitemQuantityPlus = (item) => {
    this.setState({
      cartData: this.state.cartData.map((items) => {
        if (items.id === item.id) {
          return { ...item, quantity: Number(item.quantity) + 1 };
        } else {
          {
            return items;
          }
        }
      }),
    });
  };

  handleitemQuantityMinus = (item) => {
    this.setState({
      cartData: this.state.cartData.map((items) => {
        if (items.id === item.id && item.quantity > 1) {
          return { ...item, quantity: Number(item.quantity) - 1 };
        } else {
          return items;
        }
      }),
    });
  };

  handleClearItem = (id) => {
    this.setState({
      cartData: this.state.cartData.filter((item) => {
        return item.id !== id;
      }),
    });
  };

  handleClearcartData = () => {
    this.setState({ cartData: [] });
  };

  getData = async () => {
    this.setState({ loading: true });
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      let responseData = response.data;
      this.filterData("a", responseData);
      this.setState({ loading: false });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          filterDataFunc: this.filterData,
          handleDetailsID: this.handleDetailsID,
          addToCart: this.addToCart,
          handleitemQuantityPlus: this.handleitemQuantityPlus,
          handleitemQuantityMinus: this.handleitemQuantityMinus,
          handleClearItem: this.handleClearItem,
          handleClearcartData: this.handleClearcartData,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
