import * as React from "react";
import { render } from "@testing-library/react";
import ProductDetails from "./productDetails";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const mockStore = configureMockStore([thunk]);

const mockHistoryPush = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

const initialState = {
  productState: {
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
  },
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
    cart: [],
  },
};

describe("ProductDetails component", () => {
  it("should display single product", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ProductDetails id={"p1"} />
      </Provider>
    );
    expect(wrapper.getAllByRole("product-details").length).toEqual(1);
  });
  it("should display product details", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ProductDetails id={"p2"} />
      </Provider>
    );
    expect(
      wrapper.getAllByTitle("product-details-articles-list").length
    ).toEqual(2);
  });
});
