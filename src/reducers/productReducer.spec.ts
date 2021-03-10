import { ProductActionTypes } from "../actions/productActions";
import {
  initialProductState,
  productReducer,
} from "./productReducer";

const productState = {
  products: [
    {
      id: "p1",
      name: "product 1",
      articles: [
        {
          id: "a1",
          amountRequired: 3,
        },
      ],
    },
    {
      id: "p2",
      name: "product 2",
      articles: [
        {
          id: "a1",
          amountRequired: 3,
        },
        {
          id: "a2",
          amountRequired: 1,
        },
      ],
    },
  ],
};
describe("product reducer", () => {
  it("should handle GET_ALL_PRODUCTS", () => {
    expect(
      productReducer(initialProductState, {
        type: ProductActionTypes.GET_ALL_PRODUCTS,
        products: productState.products,
      })
    ).toEqual(productState);
  });
});
