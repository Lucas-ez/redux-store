import './ProductList.scss'
import { STATUS } from '../../utils/status'
import { Error, Loader } from '..'
import { Link } from 'react-router-dom'

const ProductList = ({products, status}) => {

  if(status === STATUS.ERROR) return (<Error />);
  if(status === STATUS.LOADING) return (<Loader />);

  return (
    <div className='flex flex-center product-list'>
      {
        products.map(product => 
          <Link to={`/product/${product.id}`} className="flex flex-column bg-white product-item" >
            <div className="flex flex-center h-100">
              <img className='w-100' src={product.image} alt={product.title} />
            </div>
            <div className="product-item-bottom">
              <hr />
              <span className='product-item-price'>{product.price.toLocaleString('us-US', { style: 'currency', currency: 'USD' })}</span>
              <span className='fw-5 w-100 text-clr-grey product-item-title'>{product.title}</span>
            </div>
          </Link>
        )
      }
    </div>
  )
}

export default ProductList