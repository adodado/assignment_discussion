import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { IProduct, IProductState } from "../reducers/productReducer";

export enum ProductActionTypes {
  GET_ALL = "GET_ALL",
}

export interface IProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
  products: IProduct[];
}

export type ProductActions = IProductGetAllAction;

export const getAllProducts: ActionCreator<
  ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("");
      dispatch({
        products: response.data.results,
        type: ProductActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
