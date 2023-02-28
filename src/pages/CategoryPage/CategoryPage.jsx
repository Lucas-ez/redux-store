import "./CategoryPage.scss";
import { useEffect } from 'react'
import { ProductList, Breadcrumb } from './../../components'
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

  if (products.length === 0) return <div></div>

  return (
    <div className="category-page  bg-clr-light-grey">
      <div className="container">
        <Breadcrumb category={products[0].category} />
        <ProductList products={products} status={status}/>
      </div>
    </div>
  )
}

export default CategoryPage