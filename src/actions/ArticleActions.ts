import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";

import { IArticle, IArticleState } from "../reducers/articleReducer";

export enum ArticleActionTypes {
  GET_ALL = "GET_ALL",
  GET_BY_ID = "GET_BY_ID",
}

export interface IArticleGetAllAction {
  type: ArticleActionTypes.GET_ALL;
  articles: IArticle[];
}

export interface IArticleGetByIdAction {
    type: ArticleActionTypes.GET_BY_ID;
    articles: IArticle[];
  }

export type ArticleActions = IArticleGetAllAction | IArticleGetByIdAction;

export const getAllArticles: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("");
      dispatch({
        articles: response.data.results,
        type: ArticleActionTypes.GET_ALL,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getArticlesById: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetByIdAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("");
      dispatch({
        articles: response.data.results,
        type: ArticleActionTypes.GET_BY_ID,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
