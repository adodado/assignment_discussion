import expect from "expect";
import { ProductActionTypes } from "../actions/ProductActions";
import {
  initialProductState,
  productReducer,
} from "./productReducer";

describe("product reducer", () => {
  it("should return the initial state", () => {
    expect(
      productReducer(undefined, {
        type: ProductActionTypes.GET_ALL,
        products: [],
      })
    ).toEqual(initialProductState);
  });
  it("should handle GET_ALL", () => {
    expect(
      productReducer(initialProductState, {
        type: ProductActionTypes.GET_ALL,
        products: [],
      })
    ).toEqual(initialProductState);
  });
});
