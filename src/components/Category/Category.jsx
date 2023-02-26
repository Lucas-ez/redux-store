import './Category.scss'
import { STATUS } from '../../utils/status'
import { Loader, Error } from '..'
import CategoryItem from './../CategoryItem/CategoryItem'

const Category = ({categories, status}) => {

  if(status === STATUS.ERROR) return (<Error />);
  if(status === STATUS.LOADING) return (<Loader />);

  return (
    <section className = "categories">
      <div className = "container">
        <h4>Categories</h4>
        <div className='categories-list'>
          {
            categories.map(category => (
              // key = {category}
              <CategoryItem key={category} category={category}/>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Category