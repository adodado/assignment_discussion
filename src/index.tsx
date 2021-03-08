import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/Store";
import { Provider } from "react-redux";
import {
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import Footer from "./components/footer/footer";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import ArticlesPage from "./pages/ArticlesPage";
import CheckoutPage from "./pages/CheckoutPage";
import NotFoundPage from "./pages/NotFoundPage";
import Navigation from "./components/navigation";

// Generate the initial store
const store = configureStore();

const routing = (
  <>
    <Router>
      <Navigation />
      <Provider store={store}>
        <div className="page">
          <Switch>
            <Route exact path="/" component={ProductsPage} />
            <Route exact path="/articles" component={ArticlesPage} />
            <Route exact path="/details/:id" component={ProductDetailsPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
        </div>
      </Provider>
    </Router>
    <Footer />
  </>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
