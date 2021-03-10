import { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import axios from "axios";
import axiosRetry from "axios-retry";
import { IArticle, IArticleState } from "../reducers/articleReducer";

const { REACT_APP_API_BASE_URL } = process.env;

export enum ArticleActionTypes {
  GET_ALL_ARTICLES = "GET_ALL_ARTICLES",
}

export interface IArticleGetAllAction {
  type: ArticleActionTypes.GET_ALL_ARTICLES;
  articles: IArticle[];
}
export type ArticleActions = IArticleGetAllAction;

export const getAllArticlesCreator: ActionCreator<
  ThunkAction<Promise<any>, IArticleState, null, IArticleGetAllAction>
> = () => {
  return async (dispatch: Dispatch) => {
    try {
      axiosRetry(axios, { retries: 3 });
      const response = await axios.get(REACT_APP_API_BASE_URL + "articles/");
      dispatch({
        articles: response.data,
        type: ArticleActionTypes.GET_ALL_ARTICLES,
      });
    } catch (err) {
      console.error(err);
    }
  };
};
