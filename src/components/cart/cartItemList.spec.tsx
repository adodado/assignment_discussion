import * as React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import CartItemList from "./cartItemList";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

const initialState = {
  productState: {},
  articlesState: {
    articles: [
      {
        id: "a1",
        name: "article 1",
        amountInStock: "10",
      },
      {
        id: "a2",
        name: "article 2",
        amountInStock: "10",
      },
    ],
  },
  cartState: {
    removeProduct: jest.fn(),
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

describe("Cartitem list component", () => {
  it("should display multiple products", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItemList />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-product-display").length).toEqual(2);
  });
  it("should display remove button for each product in cart", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItemList />
      </Provider>
    );
    expect(wrapper.getAllByRole("cart-item-remove-product").length).toEqual(2);
  });
  it("should fire remove button event", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <CartItemList />
      </Provider>
    );
    const control = wrapper.getAllByTitle("cart-item-remove-product");
    const removeFunctionMock = jest.fn();
    control[0].onclick = removeFunctionMock;
    userEvent.click(control[0]);
    expect(removeFunctionMock).toHaveBeenCalledTimes(1);
  });
});
