import { Reducer } from "redux";
import { CartActions, CartActionTypes } from "../actions/CartActions";
import { IProduct } from "./productReducer";

export interface ICartState {
  readonly cart: IProduct[];
}

const initialSalesState: ICartState = {
  cart: [],
};

export const cartReducer: Reducer<ICartState, CartActions> = (
  state = initialSalesState,
  action
) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    case CartActionTypes.REMOVE_PRODUCT: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    default:
      return state;
  }
};
