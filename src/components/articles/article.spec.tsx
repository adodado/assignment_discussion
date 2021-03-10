import * as React from "react";
import { render } from "@testing-library/react";
import Article from "./article";

const article = {
  id: "a1",
  name: "article 1",
  amountInStock: 10,
};
describe("Article component", () => {
  it("should display single article", () => {
    const wrapper = render(
      <Article
        role={"article-listing"}
        name={article.name}
        amountInStock={article.amountInStock}
      />
    );
    expect(wrapper.getAllByRole("article-listing").length).toEqual(1);
  });
});
