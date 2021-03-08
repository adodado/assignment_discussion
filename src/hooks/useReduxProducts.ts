import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesCreator } from '../actions/ArticleActions'
import { getAllProductsCreator } from '../actions/ProductActions'
import { IAppState } from '../store/Store'

const useReduxProducts = () => {
	const dispatch = useDispatch()
	const { products } = useSelector(
		(state: IAppState) => state.productState
	)
	const getAllProducts = () => {
		dispatch(getAllArticlesCreator());
		dispatch(getAllProductsCreator());
    }
	return {products, getAllProducts};
}

export default useReduxProducts
