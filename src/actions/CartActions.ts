import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ICartState } from "../reducers/cartReducer";
import { IProduct } from "../reducers/productReducer";

export enum CartActionTypes {
  ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART",
  REMOVE_PRODUCT_FROM_CART = "ADD_PRODUCT_TO_CART",
  CLEAR_CART = "CLEAR_CART",
}

export interface ICartAddProductAction {
  type: CartActionTypes.ADD_PRODUCT_TO_CART;
  cart: IProduct[];
}
export interface ICartRemoveProductAction {
  type: CartActionTypes.REMOVE_PRODUCT_FROM_CART;
  cart: IProduct[];
}
export interface IClearCartAction {
  type: CartActionTypes.CLEAR_CART;
  cart: IProduct[];
}
export type CartActions = ICartAddProductAction | ICartRemoveProductAction | IClearCartAction;

export const addProductToCartCreator: ActionCreator<
  ThunkAction<any, ICartState, null, ICartAddProductAction>
> = (cart: IProduct[]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        cart,
        type: CartActionTypes.ADD_PRODUCT_TO_CART,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const removeProductFromCartCreator: ActionCreator<
  ThunkAction<any, ICartState, null, ICartRemoveProductAction>
> = (cart: IProduct[]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        cart,
        type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const clearCartCreator: ActionCreator<
  ThunkAction<any, ICartState, null, IClearCartAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        cart: [],
        type: CartActionTypes.CLEAR_CART,
      });
    } catch (err) {
      console.error(err);
    }
  };
};