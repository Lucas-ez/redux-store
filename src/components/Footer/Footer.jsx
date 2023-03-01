import './Footer.scss'

const Footer = () => {
  return (
    <footer className = "footer bg-clr-grey">
      <div className = "container">
        <div className = "footer-content text-white">
          <div className = "text-left">
            <h6>Links</h6>
            <ul>
              <li><a href = "/aboutus">About Us</a></li>
              <li><a href = "/contact">Contact Us</a></li>
              <li><a href = "/blog">Blog</a></li>
              <li><a href = "/faq">FAQ's</a></li>
            </ul>
          </div>
          <div className = "text-left">
            <h6>Policies</h6>
            <ul>
              <li><a href = "/terms">Terms & Conditions</a></li>
              <li><a href = "/cookies">Cookies Policy</a></li>
              <li><a href = "/policy">Data Policy</a></li>
            </ul>
          </div>
          <div className = "text-left">
            <h6>Contact</h6>
            <ul>
              <li>
                <span><i className = "fas fa-phone"></i></span>
                <span>+54 11 1234 5678</span>
              </li>
              <li>
                <span><i className = "fas fa-envelope"></i></span>
                <span>reduxstore@example.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer