import * as React from "react";
import { render } from "@testing-library/react";
import CartItems from "./cartItem";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import userEvent from "@testing-library/user-event";

const mockStore = configureMockStore([thunk]);

const initialState = {
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
  it("should display single product in cart", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-product-display").length).toEqual(1);
  });
  it("should display product details", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-article-display").length).toEqual(2);
  });
  it("should display product remove button", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    expect(wrapper.getAllByTitle("cart-item-remove-product").length).toEqual(1);
  });
  it("should fire remove button event", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItems product={cartItem.product} articles={cartItem.articles} />
      </Provider>
    );
    const control = wrapper.getByTitle("cart-item-remove-product");
    const removeFunctionMock = jest.fn();
    control.onclick = removeFunctionMock;
    userEvent.click(control);
    expect(removeFunctionMock).toHaveBeenCalledTimes(1);
  });
});
