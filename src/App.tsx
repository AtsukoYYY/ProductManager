import "./styles.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Header } from "./components/Header";

import { DisplayProducts } from "./pages/DisplayProducts";
import { AddProduct } from "./pages/AddProduct";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      </div>
      <Switch>
        <Route exact path="/">
          <DisplayProducts />
        </Route>
        <Route path="/add">
          <AddProduct />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
