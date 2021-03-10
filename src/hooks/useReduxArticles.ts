import { useDispatch, useSelector } from "react-redux";
import { getAllArticlesCreator } from "../actions/articleActions";
import { IAppState } from "../store/store";

const useReduxArticles = () => {
  const dispatch = useDispatch();
  const { articles } = useSelector((state: IAppState) => state.articlesState);
  function getAllArticles() {
    dispatch(getAllArticlesCreator());
  }
  return { articles, getAllArticles };
};

export default useReduxArticles;
