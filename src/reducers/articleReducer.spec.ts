import { ArticleActionTypes } from "../actions/ArticleActions";
import {
initialArticlesState,
  articleReducer,
} from "./articleReducer";

describe("articles reducer", () => {
  it("should handle GET_ALL_ARTICLES", () => {
    expect(
        articleReducer(initialArticlesState, {
        type: ArticleActionTypes.GET_ALL_ARTICLES,
        articles: [],
      })
    ).toEqual(initialArticlesState);
  });
});
