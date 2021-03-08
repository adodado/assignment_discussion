import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { ICartState } from "../reducers/cartReducer";
import { IProduct } from "../reducers/productReducer";

export enum CartActionTypes {
  ADD_PRODUCT = "ADD_PRODUCT",
  REMOVE_PRODUCT = "ADD_PRODUCT",
  GET_ALL = "GET_ALL",
}

export interface ICartAddProductAction {
  type: CartActionTypes.ADD_PRODUCT;
  cart: IProduct[];
}
export interface ICartRemoveProductAction {
  type: CartActionTypes.REMOVE_PRODUCT;
  cart: IProduct[];
}
export type CartActions = ICartAddProductAction | ICartRemoveProductAction;

export const addProductToCartCreator: ActionCreator<
  ThunkAction<any, ICartState, null, ICartAddProductAction>
> = (cart: IProduct[]) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch({
        cart,
        type: CartActionTypes.ADD_PRODUCT,
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
        type: CartActionTypes.REMOVE_PRODUCT,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
