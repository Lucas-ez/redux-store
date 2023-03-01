import './CartPage.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, getCartTotal, clearCart } from '../../store/cartSlice'

const CartPage = () => {
  const dispatch = useDispatch();
  const {data: cartProducts, totalAmount} = useSelector(state => state.cart);

  useEffect(() => {
      dispatch(getCartTotal());
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [useSelector(state => state.cart)]); 

  console.log(cartProducts)

  return (
    <div>
      CartPage
    </div>
  )
}

export default CartPage