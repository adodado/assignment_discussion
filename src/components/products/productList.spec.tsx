import * as React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductList from "./productList";
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

describe("Productlist component", () => {
  it("should display products from state", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(wrapper.getAllByRole("product-listing").length).toEqual(2);
  });
  it("should display details button for each product", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    expect(
      wrapper.getAllByRole("product-listing-details-button").length
    ).toEqual(2);
  });
  it("should fire details button click event", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ProductList />
      </Provider>
    );
    const control = wrapper.getByTitle("p1");
    userEvent.click(control);
    expect(mockHistoryPush).toHaveBeenCalledWith("/details/p1");
  });
});
