import { Reducer } from "redux";
import { ArticleActions, ArticleActionTypes } from "../actions/ArticleActions";

export interface IArticle {
  id: string;
  name: string;
  amountInStock: number;
}

export interface IArticleState {
  readonly articles: IArticle[];
}

const initialArticlesState: IArticleState = {
  articles: [],
};

export const articleReducer: Reducer<IArticleState, ArticleActions> = (
  state = initialArticlesState,
  action
) => {
  switch (action.type) {
    case ArticleActionTypes.GET_BY_ID: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    case ArticleActionTypes.GET_ALL: {
      return {
        ...state,
        articles: action.articles,
      };
    }
    default:
      return state;
  }
};
