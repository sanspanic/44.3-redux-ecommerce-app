import "./App.css";
import Navbar from "./Navbar";
import { Switch, Redirect, Route } from "react-router-dom";
import ProductList from "./ProductList";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            <ProductList />
          </Route>
          <Route exact path="/item/:id">
            <ProductDetail />
          </Route>
          <Route>
            <Cart exact path="/cart" />
          </Route>
          <Redirect to="/" />
        </Switch>
      </main>
    </div>
  );
}

export default App;
