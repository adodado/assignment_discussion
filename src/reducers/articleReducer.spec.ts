import { ArticleActionTypes } from "../actions/articleActions";
import {
initialArticlesState,
  articleReducer,
} from "./articleReducer";

const articlesState = {
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
describe("articles reducer", () => {
  it("should handle GET_ALL_ARTICLES", () => {
    expect(
        articleReducer(initialArticlesState, {
        type: ArticleActionTypes.GET_ALL_ARTICLES,
        articles: articlesState.articles,
      })
    ).toEqual(articlesState);
  });
});
