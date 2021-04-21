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
                <div class="hero_area">
    {/* <!-- NAVBAR
    ================================================== --> */}
   
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container">
        {/* <!-- Brand --> */}
        <Link to="/">
        <a class="navbar-brand" href="index.html">
          <img src="images/logo2.svg" class="navbar-brand-img" alt="..." />
        </a>
        </Link>

        {/* <!-- Toggler --> */}
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarCollapse"
          aria-controls="navbarCollapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        {/* <!-- Collapse --> */}
        <div class="collapse navbar-collapse" id="navbarCollapse">
          {/* <!-- Toggler --> */}
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-times"></i>
          </button>

          {/* <!-- Navigation --> */}
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <Link to="/">
              <a
                class="nav-link"
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
            
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                id="navbarcompany"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Company
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarcompany">
                <a class="list-group-item" href="about.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-info-circle" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      About
                    </h6>
                  </div>
                </a>
                <a class="list-group-item" href="team.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-users" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Team
                    </h6>
                  </div>
                </a>
                <a class="list-group-item" href="training.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-laptop" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Training
                    </h6>
                  </div>
                </a>
                <a class="list-group-item" href="career.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-briefcase" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Career
                    </h6>
                  </div>
                </a>
                <a class="list-group-item" href="testimonials.html">
                  <div class="icon icon-sm text-theme">
                    <i class="fas fa-comments" style={{fontSize: '30px'}}></i>
                  </div>
                  <div class="ml-4">
                    <h6 class="font-weight-bold text-uppercase text-theme mb-0">
                      Testimonials
                    </h6>
                  </div>
                </a>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id=""
                data-toggle=""
                href="portfolio.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                id=""
                data-toggle=""
                href="blog.html"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Blog
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
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
          <a
            class="navbar-btn btn btn-sm btn-theme lift ml-auto"
            href="contact.html"
          >
            <Link to="/contact">
            Contact
            </Link>
          </a>
          
          
        </div>
      </div>
    </nav>

    <div class="whatsapp">
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