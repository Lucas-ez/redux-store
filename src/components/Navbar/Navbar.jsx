import './Navbar.scss'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCategories } from '../../store/categorySlice'

const Navbar = () => {
  const dispatch = useDispatch()
  const {data: categories} = useSelector((state) => state.category)

  useEffect(() => {
    dispatch(fetchCategories());
    // eslint-disable-next-line
  }, []);

  return (
    <div className='navbar'>
      <div className="navbar-top">
        <div className="container flex flex-between">
          <Link to='/'>
            <span className='navbar-logo text-clr-primary'>Redux</span>
            <span className='navbar-logo text-clr-deco'>Store</span>
          </Link>

          <form className='flex navbar-search'>
            <input type="text" placeholder='Search...'/>
            <button type='submit'>
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div>
            <Link to='/cart'>
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-bottom bg-clr-primary">
        <div className="container flex flex-between flex-end">
          <ul className='flex'>
            {
              categories.map(category => (
                <li key = {category}><Link to = {`/category/${category}`} className='text-white'>{category}</Link></li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar