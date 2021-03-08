import { Reducer } from "redux";
import { ProductActions, ProductActionTypes } from "../actions/ProductActions";

interface IArticle {
  id: string;
  amountRequired: number;
}

export interface IProduct {
    id: string;
    name: string;
    articles: IArticle[];
}

export interface IProductState {
  readonly products: IProduct[];
  readonly current: IProduct | null;
}

const initialProductState: IProductState = {
  products: [],
  current: null,
};

export const productReducer: Reducer<IProductState, ProductActions> = (
  state = initialProductState,
  action
) => {
  switch (action.type) {
    case ProductActionTypes.GET_ALL: {
      return {
        ...state,
        products: action.products,
      };
    }
    case ProductActionTypes.GET_BY_ID: {
      return {
        ...state,
        current: action.current,
      };
    }
    default:
      return state;
  }
};
