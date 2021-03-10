import * as React from "react";
import { render } from "@testing-library/react";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import { Provider } from "react-redux";
import Product from "./product";

const mockStore = configureMockStore([thunk]);

const initialState = {
  cartState: {
    cart: [],
  },
};

const product = {
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
};
const articles = [
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
];
describe("Product component", () => {
  it("should display single product", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <Product
          role={"product-listing"}
          id={product.id}
          name={product.name}
          productArticles={product.articles}
          articles={articles}
        />
      </Provider>
    );
    expect(wrapper.getAllByRole("product-listing").length).toEqual(1);
  });
  it("should display product details", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <Product
          role={"product-listing"}
          id={product.id}
          name={product.name}
          productArticles={product.articles}
          articles={articles}
        />
      </Provider>
    );
    expect(wrapper.getAllByTitle("product-listing-articles").length).toEqual(2);
  });
});
