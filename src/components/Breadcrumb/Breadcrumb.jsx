import { Link } from "react-router-dom"

const Breadcrumb = ({category, product}) => {
  return (
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
          <Link to = {`/category/${category}`}>
            { category || '' }
          </Link>
        </li>
        {
          product !== undefined ?
          <>
            <li>
              <span className = "breadcrumb-separator">
                <i className="fa-solid fa-caret-right"></i>
              </span>
            </li>
            <li className="text-capitalize" style={{
              maxWidth: '300px',
              whiteSpace: 'nowrap',
              textOverflow:'ellipsis',
              overflow: 'hidden',
            }}>
              { product || '' }
            </li>
          </>
          : null
        }
      </ul>
    </div>
  )
}

export default Breadcrumb