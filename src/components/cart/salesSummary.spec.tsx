import * as React from "react";
import { render } from "@testing-library/react";
import SaleSummary from "./saleSummary";
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
const setProcessingSale = jest.fn();
describe("Salesummary component", () => {
  it("should display ammount of products correctly from state", () => {
    const store = mockStore(initialState);
    const wrapper = render(
      <Provider store={store}>
        <SaleSummary setProcessingSale={setProcessingSale} />
      </Provider>
    );
    expect(
      wrapper.getAllByRole("sale-summary-product-quantity")[0].innerHTML
    ).toEqual("2 Products");
  });
});
