import { applyMiddleware, combineReducers, createStore, Store } from "redux";
import thunk from "redux-thunk";
import { productReducer, IProductState } from "../reducers/productReducer";
import { articleReducer, IArticleState } from "../reducers/articleReducer";
import { cartReducer, ICartState } from "../reducers/cartReducer";

// Create an interface for the application state
export interface IAppState {
  productState: IProductState;
  cartState: ICartState;
  articlesState: IArticleState;
}

// Create the root reducer
const rootReducer = combineReducers<IAppState>({
  productState: productReducer,
  cartState: cartReducer,
  articlesState: articleReducer,
});

// Create a configure store function of type `IAppState`
export default function configureStore(): Store<IAppState, any> {
  const store = createStore(rootReducer, undefined, applyMiddleware(thunk));
  return store;
}
