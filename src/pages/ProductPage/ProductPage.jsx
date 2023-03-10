import './ProductPage.scss'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductByID } from '../../store/productSlice';
import { Toaster, toast } from 'react-hot-toast';
import {Error, Loader, StarsRating, Breadcrumb} from './../../components';
import { STATUS } from '../../utils/status';
import { addToCart } from '../../store/cartSlice';


export const ProductPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {data: product, status} = useSelector(state => state.product);
  const [qty, setQty] = useState(1);

  useEffect(()=> {
    dispatch(fetchProductByID(id))
    // eslint-disable-next-line
  }, [])

  const incrementQty = () => {
    setQty(qty + 1)
  }

  const decrementQty = () => {
    setQty(qty === 0 ? 0 : qty - 1)
  }

  const addToCartHandler = () => {
    const cartProduct = {
      ...product,
      quantity: qty,
      totalPrice: qty*product.price
    }

    dispatch(addToCart(cartProduct));
    toast.success('Successfully added', {
      style: {
        backgroundColor: '#white',
        border: '1px solid #368986',
        padding: '16px',
        color: '#368986',
      },
      iconTheme: {
        primary: '#368986',
        secondary: 'white',
      },
    });
  };
  
  if(status === STATUS.ERROR) return (<Error />);
  if(status === STATUS.LOADING) return (<Loader />);
  if(!product.id) return (<Loader />)

  return (
    <div className='ProductPage'>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <div className="container">
        <Breadcrumb category={product.category} product={product.title}/>
        <div className="flex flex-between ProductPage-top">
          <div className="flex flex-center w-100 ProductPage-top-left">
            <img src={product.image} alt={product.title} />
          </div>
          <div className='flex flex-column ProductPage-top-right'>
            <Link to={`/category/${product.category}`} className='fw-500 text-clr-deco'>
              {`more ${product.category}`}
            </Link>
            <span className='title'>{product.title}</span>
            <StarsRating rate={product.rating.rate} count={product.rating.count}/>
            <span className='price'>$ {product.price}</span>
            <div className = "qty flex">
              <div className = "qty-change flex">
                <button type = "button" className={'qty-dec flex flex-center' + (qty === 0 ? ' bg-clr-light-grey':'')} onClick={decrementQty}>
                  <i className = "fa-solid fa-minus"></i>
                </button>
                <span className = "qty-value flex flex-center">{qty}</span>
                <button type = "button" className='qty-inc flex flex-center' onClick={incrementQty}>
                  <i className = "fa-solid fa-plus"></i>
                </button>
              </div>
            </div>
            <button className='btn btn-primary' onClick={addToCartHandler}>
              <i className="fa-solid fa-cart-plus btn-icon"></i>
              <span>Add to cart</span>
            </button>
          </div>
        </div>
        <div className='ProductPage-bottom'>
          <hr />
          <h3>Description</h3>
          <div className='product-description'>
            {product.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage;