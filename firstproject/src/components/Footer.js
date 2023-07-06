import React from 'react'

function Footer() {
  return (
    <div>
    {/* footer design --------------------------------*/}
    <footer className="footer">
        <div className="container-footer">
          <div className="row-footer">
            <div className="footer-col">
              <h4>company</h4>
              <ul>
                <li><a href="#">about us</a></li>
                <li><a href="#services">our services</a></li>
                <li><a href="#">privacy policy</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="#intro">Room &amp; Suit</a></li>
                <li><a href="#">Events &amp; Celebrations</a></li>
                <li><a href="#">Offers</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Contact</h4>
              <ul>
                <li><a href="#">1616 Gulberg 2  Lahore, Pakistan</a></li>
                <li><a href="#">0464807466</a></li>
                <li><a href="#">Info@Marina Hotels</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>follow us</h4>
              <div className="social-links">
                <a href="https://www.facebook.com"><i className="fab fa-facebook-f" /></a>
                <a href="https://www.twitter.com"><i className="fab fa-twitter" /></a>
                <a href="https://www.instagram.com"><i className="fab fa-instagram" /></a>
                <a href="https://www.linkedin.com"><i className="fab fa-linkedin-in" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer