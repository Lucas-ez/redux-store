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

  console.log(productByCategory);

  return (
    <div>
      <Link to = {`category/${category}`} >
        <div className = "category-item" >
          <div>
            {
            (productByCategory[category]) !== undefined
            ?
              <img 
                src = {productByCategory[category].image}
                style={{width: '50px'}}
                alt = {productByCategory[category].id}
              />
            : 
              <div></div>
            }
          </div>
          <div>
            <h6>{category}</h6>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CategoryItem;