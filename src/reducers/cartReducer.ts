import { Reducer } from "redux";
import { CartActions, CartActionTypes } from "../actions/cartActions";
import { IProduct } from "./productReducer";

export interface ICartState {
  readonly cart: IProduct[];
}

export const initialCartState: ICartState = {
  cart: [],
};

export const cartReducer: Reducer<ICartState, CartActions> = (
  state = initialCartState,
  action
) => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CART: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    case CartActionTypes.CLEAR_CART: {
      return {
        ...state,
        cart: action.cart,
      };
    }
    default:
      return state;
  }
};
