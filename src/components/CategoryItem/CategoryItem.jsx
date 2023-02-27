import './CategoryItem.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsByCategory } from '../../store/categorySlice'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {
    catProductSingle: productByCategory,
  } = useSelector(state => state.category)

  useEffect(() => {
    dispatch(fetchProductsByCategory(category, 'single'));
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <Link to = {`category/${category}`} >
        <div className = "flex flex-column bg-white h-100 category-item" >
          <div className='flex flex-center h-100'>
            {
            (productByCategory[category]) !== undefined
            ?
              <img 
                src = {productByCategory[category].image}
                alt = {productByCategory[category].id}
              />
            : 
              <div></div>
            }
          </div>
          <div className='flex flex-center w-100'>
            <h6 className='w-100 text-center text-capitalize text-clr-grey fw-6'>{category}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem;