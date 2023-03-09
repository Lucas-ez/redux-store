import './CartPage.scss'
import { Link } from 'react-router-dom'
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

  if(cartProducts.length === 0)
    return (
      <div className='min-height container'>
        <h4>No items found</h4>
      </div>
    )

  return (
    <div className='cart-page min-height container'>
      <table className="flex flex-column w-100">
        <tbody>
          <thead>
            <tr>
              <td>Image</td>
              <td>Title</td>
              <td>Price</td>
              <td>Qty</td>
              <td>Sub Total</td>
            <td></td>
            </tr>
          </thead>
          {
            cartProducts.map(product => (
              <tr className='cart-page-row' key={product.id}>
                <td>
                  <Link to={`/product/${product.id}`} className='img flex flex-center'>
                    <img src={product.image} alt="" />
                  </Link>
                </td>
                <td>
                  <Link to={`/product/${product.id}`}>
                    <span className='text-clr-deco-dark title'>{product.title}</span>
                  </Link>
                </td>
                <td className='price'>$ {product.price}</td>
                <td>{product.quantity}</td>
                <td className='price'>$ {product.totalPrice}</td>
                <td>
                  <button onClick={() => dispatch(removeFromCart(product.id))} className='btn btn-primary'>Remove</button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className='total text-end'>
        <span className='w-100 fw-5'>
          Total ${cartProducts.reduce((acum, prod) => acum + prod.totalPrice,0).toLocaleString('us-US', { style: 'currency', currency: 'USD' })}
        </span>
      </div>
    </div>
  )
}

export default CartPage