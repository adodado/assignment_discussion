import { useDispatch, useSelector } from 'react-redux'
import { getAllProductsCreator, getProductByIdCreator } from '../actions/ProductActions'
import { IAppState } from '../store/Store'

const useReduxProducts = () => {
	const dispatch = useDispatch()
	const { products } = useSelector(
		(state: IAppState) => state.productState
	)
	const getAllProducts = () => {
		dispatch(getAllProductsCreator())
    }
    const getProductById= (id: string) => {
		dispatch(getProductByIdCreator(id))
    }
	return {products, getAllProducts, getProductById};
}

export default useReduxProducts
