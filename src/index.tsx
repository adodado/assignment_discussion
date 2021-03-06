import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Store } from "redux";
import configureStore, { IAppState } from "./store/Store";
import { Provider } from "react-redux";
import { getAllProducts } from "./actions/ProductActions";

interface IProps {
  store: Store<IAppState>;
}
const Root: React.FC<IProps> = (props) => {
  return (
    <Provider store={props.store}>
      <App />
    </Provider>
  );
};

// Generate the initial store
const store = configureStore();
store.dispatch(getAllProducts());

ReactDOM.render(<Root store={store} />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
