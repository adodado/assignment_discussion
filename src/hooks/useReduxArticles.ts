import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesCreator } from '../actions/ArticleActions'
import { IAppState } from '../store/Store'

const useReduxArticles = () => {
	const dispatch = useDispatch()
	const { articles } = useSelector(
		(state: IAppState) => state.articlesState
	)
	function getAllArticles() {
		dispatch(getAllArticlesCreator());
	}
	return {articles, getAllArticles};
}

export default useReduxArticles
