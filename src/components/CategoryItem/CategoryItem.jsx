import './CategoryItem.scss'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductsByCategory } from '../../store/categorySlice'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  const dispatch = useDispatch();
  const {
    catProductSingle: productByCategory,
    catProductSingleStatus: productByCategoryStatus,
  } = useSelector(state => state.category)

  useEffect(() => {
    dispatch(fetchProductsByCategory(category, 'single'));
    //eslint-disable-next-line
  }, [])

  return (
    <div>
      <Link to = {`category/${category}`} >
        <div className = "category-item" >
          <div className='top'>
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
          <div className='bottom'>
            <h6>{category}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem;