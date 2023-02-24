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
        <div>
            <h3>Categories</h3>
        </div>
        <div>
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