import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";

import { saleReducer, ISaleState } from "../reducers/saleReducer";
import { productReducer, IProductState } from "../reducers/productReducer";

// Create an interface for the application state
export interface IAppState {
  productState: IProductState;
  salesState: ISaleState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  productState: productReducer,
  salesState: saleReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
