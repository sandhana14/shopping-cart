import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Main from "./components/Main";
import products from "./data";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) => {
          return item.id === product.id
            ? { ...exist, quantity: exist.quantity + 1 }
            : item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...exist, quantity: exist.quantity - 1 }
            : item
        )
      );
    }
  };

  return (
    <Router>
      <div className="App">
        <Header countcartitems={cartItems.length} />
        <Switch>
          <React.Fragment>
            <Route exact path="/">
              <Main onadd={onAdd} products={products} />
            </Route>
            <Route exact path="/cart">
              <Cart onadd={onAdd} cartitems={cartItems} onremove={onRemove} />
            </Route>
          </React.Fragment>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
