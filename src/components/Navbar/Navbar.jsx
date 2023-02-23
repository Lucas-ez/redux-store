import './Navbar.scss'
import { Link } from 'react-router-dom'

const Navbar = () => {
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
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>

          <div>
            <Link to='/cart'>
              <i class="fa-solid fa-cart-shopping"></i>
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-bottom bg-clr-primary">
        <div className="container flex flex-between">
          <ul>
            <li>
              <Link to='/' className='text-white'>Test</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar