import { Reducer } from "redux";
import { ArticleActions, ArticleActionTypes } from "../actions/articleActions";

export interface IArticle {
  id: string;
  name: string;
  amountInStock: number;
}

export interface IArticleState {
  readonly articles: IArticle[];
}

export const initialArticlesState: IArticleState = {
  articles: [],
};

export const articleReducer: Reducer<IArticleState, ArticleActions> = (
  state = initialArticlesState,
  action
) => {
  switch (action.type) {
    case ArticleActionTypes.GET_ALL_ARTICLES: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default:
      return state;
  }
};
