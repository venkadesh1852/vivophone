function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>vivo</h3>
            <p>Leading smartphone brand committed to innovation and excellence.</p>
          </div>
          
          <div className="footer-section">
            <h4>Products</h4>
            <ul>
              <li><a href="#flagship">Flagship</a></li>
              <li><a href="#camera">Camera Series</a></li>
              <li><a href="#budget">Budget Series</a></li>
              <li><a href="#accessories">Accessories</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li><a href="#help">Help Center</a></li>
              <li><a href="#warranty">Warranty</a></li>
              <li><a href="#service">Service Centers</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li><a href="#about">About Vivo</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#careers">Careers</a></li>
              <li><a href="#investors">Investors</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 Vivo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer