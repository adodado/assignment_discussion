import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import axiosRetry from 'axios-retry';

import { IArticle, IArticleState } from "../reducers/articleReducer";

export enum ArticleActionTypes {
  GET_ALL_ARTICLES = "GET_ALL_ARTICLES",
  GET_BY_ID_ARTICLE = "GET_BY_ID_ARTICLE",
}

export interface IArticleGetAllAction {
  type: ArticleActionTypes.GET_ALL_ARTICLES;
  articles: IArticle[];
}

export interface IArticleGetByIdAction {
    type: ArticleActionTypes.GET_BY_ID_ARTICLE;
    current: IArticle;
  }

export type ArticleActions = IArticleGetAllAction | IArticleGetByIdAction;

export const getAllArticlesCreator: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      axiosRetry(axios, { retries: 3 });
      const response = await axios.get("http://localhost:7000/articles/");
      dispatch({
        articles: response.data,
        type: ArticleActionTypes.GET_ALL_ARTICLES,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const getArticlesByIdCreator: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetByIdAction>
> = (id: string) => {
  return async (dispatch: Dispatch) => {
    try {
      axiosRetry(axios, { retries: 3 });
      const response = await axios.get("http://localhost:7000/articles/"+id);
      dispatch({
        current: response.data,
        type: ArticleActionTypes.GET_BY_ID_ARTICLE,
      });
    } catch (err) {
      console.error(err);
    }
  };
};

