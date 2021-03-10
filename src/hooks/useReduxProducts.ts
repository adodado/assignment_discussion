import { useDispatch, useSelector } from 'react-redux'
import { getAllArticlesCreator } from '../actions/articleActions'
import { getAllProductsCreator } from '../actions/productActions'
import { IAppState } from '../store/store'

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
