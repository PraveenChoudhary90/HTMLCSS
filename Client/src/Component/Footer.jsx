

const Footer = ()=>{
    return(
        <>
         <div className="main-container">

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-column">
            <h3>About Us</h3>
            <p>We create amazing web experiences for everyone. Your success is our mission.</p>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">📸</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
        </>
    )
}

export default Footer;