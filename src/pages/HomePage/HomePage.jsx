import './HomePage.scss'
import { Category } from './../../components'
import { ProductList } from '../../components'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/categorySlice'
import { useEffect } from 'react'

const HomePage = () => {

  const dispatch = useDispatch();
  const {
    data: categories,
    status: categoriesStatus
  } = useSelector(state => state.category);

  useEffect(() => {
    dispatch(fetchCategories());
    //eslint-disable-next-line
  }, [])

  return (
    <div className='home-page'>
      <Category categories={categories}/>
    </div>
  )
}

export default HomePage