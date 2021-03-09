import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesCreator, setArticlesCreator} from '../actions/ArticleActions'
import { IArticle } from '../reducers/articleReducer'
import { IAppState } from '../store/Store'

const useReduxArticles = () => {
	const dispatch = useDispatch()
	const { articles } = useSelector(
		(state: IAppState) => state.articlesState
	)
	function getAllArticles() {
		dispatch(getAllArticlesCreator());
	}
	function setArticles(articles: IArticle[]) {
		dispatch(setArticlesCreator(articles));
	}
	return {articles, getAllArticles, setArticles};
}

export default useReduxArticles
