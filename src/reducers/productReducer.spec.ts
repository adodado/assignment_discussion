import { ProductActionTypes } from "../actions/ProductActions";
import {
  initialProductState,
  productReducer,
} from "./productReducer";

describe("product reducer", () => {
  it("should handle GET_ALL_PRODUCTS", () => {
    expect(
      productReducer(initialProductState, {
        type: ProductActionTypes.GET_ALL_PRODUCTS,
        products: [],
      })
    ).toEqual(initialProductState);
  });
});
