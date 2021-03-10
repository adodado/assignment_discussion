import { Reducer } from "redux";
import { ProductActions, ProductActionTypes } from "../actions/productActions";

export interface IProductArticle {
  id: string;
  amountRequired: number;
}

export interface IProduct {
    id: string;
    name: string;
    articles: IProductArticle[];
}

export interface IProductState {
  readonly products: IProduct[];
}

export const initialProductState: IProductState = {
  products: [],
};

export const productReducer: Reducer<IProductState, ProductActions> = (
  state = initialProductState,
  action
) => {
  switch (action.type) {
    case ProductActionTypes.GET_ALL_PRODUCTS: {
      return {
        ...state,
        products: action.products,
      };
    }
    default:
      return state;
  }
};
