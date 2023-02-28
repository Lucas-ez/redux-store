import './ProductPage.scss'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductByID } from '../../store/productSlice';
import { Toaster } from 'react-hot-toast';
import {Error, Loader, StarsRating, Breadcrumb} from './../../components';
import { STATUS } from '../../utils/status';


export const ProductPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {data: product, status} = useSelector(state => state.product)

  useEffect(()=> {
    dispatch(fetchProductByID(id))
    // eslint-disable-next-line
  }, [])

  console.log(product, status);
  
  if(status === STATUS.ERROR) return (<Error />);
  if(status === STATUS.LOADING) return (<Loader />);
  if(!product.id) return (<Loader />)

  return (
    <div className='ProductPage'>
      <Toaster
        position="top-center"
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
            <button className='btn btn-primary'>
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