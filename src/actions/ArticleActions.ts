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

export const getAllArticlesCreator: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response = await axios.get("http://localhost:7000/articles/");
      dispatch({
        articles: response.data,
        type: ArticleActionTypes.GET_ALL,
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
      const response = await axios.get("http://localhost:7000/articles/"+id);
      dispatch({
        articles: response.data,
        type: ArticleActionTypes.GET_BY_ID,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
