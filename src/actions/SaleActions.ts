import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { ISales, ISaleState } from "../reducers/saleReducer";

export enum SalesActionTypes {
  REGISTER_SALE = "REGISTER_SALE",
  GET_ALL = "GET_ALL",
}

export interface ISalesRegisterSaleAction {
  type: SalesActionTypes.REGISTER_SALE;
  sales: ISales[];
}

export interface ISalesGetAllAction {
  type: SalesActionTypes.GET_ALL;
  sales: ISales[];
}

export type SaleActions = ISalesGetAllAction | ISalesRegisterSaleAction;

export const registerSale: ActionCreator<
  ThunkAction<Promise<any>, ISaleState, null, ISalesRegisterSaleAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.post("");
      dispatch({
        sales: response.data.results,
        type: SalesActionTypes.REGISTER_SALE,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getAllSales: ActionCreator<
  ThunkAction<Promise<any>, ISaleState, null, ISalesGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("");
      dispatch({
        products: response.data.results,
        type: SalesActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
