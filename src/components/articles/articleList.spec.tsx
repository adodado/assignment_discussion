import * as React from "react";
import { render } from "@testing-library/react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import ArticlesList from "./articleList";

const mockStore = configureMockStore([thunk]);

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

describe("ArticleList component", () => {
  it("should display multiple articles", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <ArticlesList />
      </Provider>
    );
    expect(wrapper.getAllByRole("article-listing").length).toEqual(2);
  });
});
