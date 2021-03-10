import { CartActionTypes } from "../actions/cartActions";
import { cartReducer, initialCartState } from "./cartReducer";

const cartState = {
  cart: [
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

describe("cart reducer", () => {
    it("should handle ADD_PRODUCT_TO_CART", () => {
      expect(
        cartReducer(initialCartState, {
          type: CartActionTypes.ADD_PRODUCT_TO_CART,
          cart: [cartState.cart[0]],
        })
      ).toEqual({cart: [cartState.cart[0]]});
    });    
    it("should handle REMOVE_PRODUCT_FROM_CART", () => {
      expect(
        cartReducer(initialCartState, {
          type: CartActionTypes.REMOVE_PRODUCT_FROM_CART,
          cart: []
        })
      ).toEqual(initialCartState);
    });
  });