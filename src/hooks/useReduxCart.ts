import { useDispatch, useSelector } from 'react-redux'
import { removeProductFromCartCreator, addProductToCartCreator } from '../actions/CartActions'
import { IProduct } from '../reducers/productReducer'
import { IAppState } from '../store/Store'

const useReduxCart = () => {
	const dispatch = useDispatch()
	const { cart } = useSelector(
		(state: IAppState) => state.cartState
	)
	const addProduct = (product: IProduct) => {
		dispatch(addProductToCartCreator([...cart, product]))
	}
	const removeProduct = (product: IProduct) => {
		dispatch(removeProductFromCartCreator(cart.filter((item)=> item !== product)))
	}
	return {cart, addProduct, removeProduct};
}

export default useReduxCart
