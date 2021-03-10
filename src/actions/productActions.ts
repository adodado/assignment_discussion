import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import axiosRetry from "axios-retry";
import { IProduct, IProductState } from "../reducers/productReducer";

const { REACT_APP_API_BASE_URL } = process.env;

export enum ProductActionTypes {
  GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS",
}

export interface IProductGetAllAction {
  type: ProductActionTypes.GET_ALL_PRODUCTS;
  products: IProduct[];
}

export type ProductActions = IProductGetAllAction;

export const getAllProductsCreator: ActionCreator<
  ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      axiosRetry(axios, { retries: 3 });
      const response = await axios.get(REACT_APP_API_BASE_URL + "products/");
      dispatch({
        products: response.data,
        type: ProductActionTypes.GET_ALL_PRODUCTS,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
