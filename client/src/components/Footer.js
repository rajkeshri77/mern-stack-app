import React from 'react';

class Footer extends React.Component {
    render () {
        return (
            <div>
                <section className="info_section  pt-5">
      <div className="social_container">
        <div className="social_box">
          <a href="https://www.facebook.com/InetworkHub/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com/INetworkHub1">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/company/inetwork-hub">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.instagram.com/inetwork_hub/">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="info_container ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-4">
              <h6>
                ABOUT US
              </h6>
              <p>
                Bring your online business with us. Let us take care of all the hard stuff and you focus on expanding your business.  We specialise in building websites, Mobile applications, SEO optimization and many more ,so that you always stay ahead in the market.
              </p>
            </div>
            <div className="col-md-6 col-lg-2">
              <h6>
                Company
              </h6>
              <li> <a href="about.html"> About</a></li>
              <li> <a href="team.html"> Team</a></li>
              <li> <a href="training.html"> Training</a></li>
              <li> <a href="career.html"> Career</a></li>
              <li> <a href="contact.html"> Contact</a></li>
            </div>
            <div className="col-md-6 col-lg-2">
              <h6>
                View
              </h6>
              <li><a href="services.html">Services</a></li>
              <li><a href="portfolio.html">Portfolio</a></li>
              <li><a href="blog.html">Blog</a></li>
              <li><a href="terms.html">Terms Of Use</a></li>
              <li><a href="policy.html">Privacy Policy</a></li>
            </div>
            <div className="col-md-4 col-lg-4">
              <h6>
                CONTACT US
              </h6>
              <div className="info_link-box">
                <a href="">
                  <img src="images/location-footer.png" alt="image" />
                  <span>87/181, Raja SC Mullick Road, Ganguly Bagan, Kolkata, India - 700047
</span>
                </a>
                <a href="tel:8319432026">
                  <img src="images/call.png" alt="image" />
                  <span>+91 8319432026 <br />  +91 7000318920 </span>
                  
                </a>
                <a href="mailto:contact@inetworkhub.com">
                  <img src="images/mail.png" alt="image" />
                  <span> Contact@inetworkhub.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer section --> */}
      <section className=" footer_section">
        <div className="container">
          <p>
            Proudly Created By <a href="https://inetworkhub.com/" style={{color: '#fbac2e'}}>INetwork Hub</a>
            <br />
            © INetwork Hub 2019-21. All Rights Reserved.
          </p>
        </div>
      </section>
      {/* <!-- footer section --> */}
  
    </section>
            </div>
        );
    }
}

export default Footer;