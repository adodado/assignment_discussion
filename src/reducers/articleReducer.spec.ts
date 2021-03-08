import expect from "expect";
import { ArticleActionTypes } from "../actions/ArticleActions";
import {
initialArticlesState,
  articleReducer,
} from "./articleReducer";

describe("articles reducer", () => {
  it("should return the initial state", () => {
    expect(
        articleReducer(undefined, {
        type: ArticleActionTypes.GET_ALL,
        articles: [],
      })
    ).toEqual(initialArticlesState);
  });
  it("should handle GET_ALL", () => {
    expect(
        articleReducer(initialArticlesState, {
        type: ArticleActionTypes.GET_ALL,
        articles: [],
      })
    ).toEqual(initialArticlesState);
  });
});
