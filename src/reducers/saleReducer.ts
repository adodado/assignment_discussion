import { Reducer } from "redux";
import { SaleActions, SalesActionTypes } from "../actions/SaleActions";

export interface ISales {
  id: string;
}

export interface ISaleState {
  readonly sales: ISales[];
}

const initialSalesState: ISaleState = {
  sales: [],
};

export const saleReducer: Reducer<ISaleState, SaleActions> = (
  state = initialSalesState,
  action
) => {
  switch (action.type) {
    case SalesActionTypes.REGISTER_SALE: {
      return {
        ...state,
        sales: action.sales,
      };
    }
    case SalesActionTypes.GET_ALL: {
      return {
        ...state,
        sales: action.sales,
      };
    }
    default:
      return state;
  }
};
