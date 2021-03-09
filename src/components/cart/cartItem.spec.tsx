import * as React from "react";
import { render } from "@testing-library/react";
import CartItems from "./cartItem";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

const initialState = {
  productState: {
    products: [],
  },
  articlesState: {
    articles: [
      {
        id: "a1",
        name: "article 1",
        amountInStock: 10,
      },
      {
        id: "a2",
        name: "article 2",
        amountInStock: 10,
      },
    ],
  },
  cartState: {
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
  },
};

const cartItem = {
  product: {
    id: "p1",
    name: "product 1",
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
  articles: [
    {
      id: "a1",
      name: "article 1",
      amountInStock: 10,
    },
    {
      id: "a2",
      name: "article 2",
      amountInStock: 10,
    },
  ],
};
describe("CartItem component", () => {
  it("should display product in cart correctly from state", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-product-display").length).toEqual(1);
  });
  it("should display product details in cart correctly from state", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-article-display").length).toEqual(2);
  });
});
