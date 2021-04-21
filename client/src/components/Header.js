import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ContactForm from './Contact';
import Home from './Home';
import ContactResult from './Result';

class Header extends React.Component {
    render () {
        return (
            <Router>
            <div className="hero_area">
    {/* <!-- NAVBAR
    ================================================== --> */}
   
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        {/* <!-- Brand --> */}
        <Link to="/">
        <a className="navbar-brand" href="index.html">
          <img src="images/logo2.svg" className="navbar-brand-img" alt="..." />
        </a>
        </Link>
        {/* <!-- Toggler --> */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div className="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Toggler --> */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* <!-- Navigation --> */}
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/">
              <a
                className="nav-link"
                id=""
                data-toggle=""
                href="index.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Home
              </a>
              </Link>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarcompany"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Company
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarcompany">
                <a className="list-group-item" href="about.html">
                  <div className="icon icon-sm text-theme">
                    <i className="fas fa-info-circle" style={{fontSize: '30px'}}></i>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-weight-bold text-uppercase text-theme mb-0">
                      About
                    </h6>
                  </div>
                </a>
                <a className="list-group-item" href="team.html">
                  <div className="icon icon-sm text-theme">
                    <i className="fas fa-users" style={{fontSize: '30px'}}></i>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-weight-bold text-uppercase text-theme mb-0">
                      Team
                    </h6>
                  </div>
                </a>
                <a className="list-group-item" href="training.html">
                  <div className="icon icon-sm text-theme">
                    <i className="fas fa-laptop" style={{fontSize: '30px'}}></i>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-weight-bold text-uppercase text-theme mb-0">
                      Training
                    </h6>
                  </div>
                </a>
                <a className="list-group-item" href="career.html">
                  <div className="icon icon-sm text-theme">
                    <i className="fas fa-briefcase" style={{fontSize: '30px'}}></i>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-weight-bold text-uppercase text-theme mb-0">
                      Career
                    </h6>
                  </div>
                </a>
                <a className="list-group-item" href="testimonials.html">
                  <div className="icon icon-sm text-theme">
                    <i className="fas fa-comments" style={{fontSize: '30px'}}></i>
                  </div>
                  <div className="ml-4">
                    <h6 className="font-weight-bold text-uppercase text-theme mb-0">
                      Testimonials
                    </h6>
                  </div>
                </a>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id=""
                data-toggle=""
                href="portfolio.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id=""
                data-toggle=""
                href="blog.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id=""
                data-toggle=""
                href="services.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Services
              </a>
            </li>
            
          </ul>

          {/* <!-- Button --> */}
          <Link to="/contact">
          <a
            className="navbar-btn btn btn-sm btn-theme lift ml-auto"
            href="contact.html"
          >
            Contact
          </a>
          </Link>
        </div>
      </div>
    </nav>

    <div className="whatsapp">
      <a href="https://api.whatsapp.com/send?phone=7000318920" target="_blank" style={{color: 'white !important'}}>
        <img src="images/whatsapp.png" alt="icon" />
      </a>
    </div>
    </div>
    <Switch>
        <Route path="/contact"><ContactForm /></Route>
        <Route path="/result"><ContactResult /></Route>
        <Route path="/"><Home /></Route>
    </Switch>
    </Router>
        );
    }
}

export default Header;