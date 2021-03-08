import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { IProduct, IProductState } from "../reducers/productReducer";

export enum ProductActionTypes {
  GET_ALL = "GET_ALL",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  ADD_PRODUCT = "ADD_PRODUCT",
  GET_BY_ID = "GET_BY_ID",
}

export interface IProductGetAllAction {
  type: ProductActionTypes.GET_ALL;
  products: IProduct[];
}
export interface IProductGetByIdAction {
  type: ProductActionTypes.GET_BY_ID;
  current: IProduct;
}
export interface IProductAddAction {
  type: ProductActionTypes.ADD_PRODUCT;
  products: IProduct[];
}
export interface IProductRemoveAction {
    type: ProductActionTypes.REMOVE_PRODUCT;
    products: IProduct[];
  }

export type ProductActions = IProductGetAllAction | IProductGetByIdAction;

export const getAllProductsCreator: ActionCreator<
  ThunkAction<Promise<any>, IProductState, null, IProductGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("http://localhost:7000/products/");
      dispatch({
        products: response.data,
        type: ProductActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const addProductCreator: ActionCreator<
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

export const removeProductCreator: ActionCreator<
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

export const getProductByIdCreator: ActionCreator<
  ThunkAction<Promise<any>, IProductState, null, IProductGetByIdAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("http://localhost:7000/products/"+id);
      dispatch({
        current: response.data.results,
        type: ProductActionTypes.GET_BY_ID,
      });
    } catch (err) {
      console.error(err);
    }
  };
};