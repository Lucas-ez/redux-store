import "./CategoryPage.scss";
import { useEffect } from 'react'
import { ProductList } from './../../components'
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link } from 'react-router-dom';
import { fetchProductsByCategory } from '../../store/categorySlice';

const CategoryPage = () => {
  const dispatch = useDispatch();
  const {id} = useParams();
  const {catProductAll: products, catProductAllStatus: status} = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchProductsByCategory(id, 'all'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="category-page  bg-clr-light-grey">
      <div className="container">
        <div className="breadcrumb">
            <ul className = "flex">
              <li>
                <Link to = "/">
                  <i className="fa-solid fa-house"></i>
                </Link>
              </li>
              <li>
                  <span className = "breadcrumb-separator">
                    <i className="fa-solid fa-caret-right"></i>
                  </span>
              </li>
              <li>
                Category
              </li>
              <li>
                <span className = "breadcrumb-separator">
                  <i className="fa-solid fa-caret-right"></i>
                </span>
              </li>
              <li className="text-capitalize">
                { products[0] && products[0].category }
              </li>
            </ul>
        </div>
        <ProductList products={products} status={status}/>
      </div>
    </div>
  )
}

export default CategoryPage