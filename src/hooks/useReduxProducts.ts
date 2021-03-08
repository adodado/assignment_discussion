import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCreator } from '../actions/ProductActions'
import { IAppState } from '../store/Store'

const useReduxProducts = () => {
	const dispatch = useDispatch()
	const { products } = useSelector(
		(state: IAppState) => state.productState
	)
	const getAllProducts = () => {
		dispatch(getAllProductsCreator())
    }
	return {products, getAllProducts};
}

export default useReduxProducts
