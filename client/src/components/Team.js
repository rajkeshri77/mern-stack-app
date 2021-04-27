import React from 'react';

class Team extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
}
    render () {
        return (
            <div>
                <section className="pt-8 pt-md-0 border-bottom bg-light">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            {/* <!-- Map --> */}
            <div className="position-relative">
              <img
                src="images/location.png"
                alt="location"
                className="img-fluid mw-130 float-right mb-6 mb-md-0 aos-init aos-animate mt-8"
                width="500px"
                data-aos="fade-right"
              />
            </div>
          </div>
          <div
            className="col-12 col-md-6 col-lg-5 offset-lg-1 py-8 py-md-11 py-lg-12"
          >
            {/* <!-- Heading --> */}
            <h2>Located in Kolkata.<br /></h2>

            {/* <!-- Text --> */}
            <p className="font-size-lg text-gray-700 mb-6">
              We are team of technologies enthusiast whose aim is to provide world className software, 
              Websites and Application to every individual within their budget and our funda is simple- 
              “When spider webs unite, they can tie up a lion’’ &#x1F609;
            </p>

            {/* <!-- Stats --> */}
            <div className="d-flex">
              <div className="pr-5">
                <h3 className="text-warning mb-0">
                  <span
                    data-toggle="countup"
                    data-from="0"
                    data-to="100"
                    data-aos=""
                    data-aos-id="countup:in"
                    className="aos-init aos-animate counted"
                    >100</span
                  >%
                </h3>
                <p className="text-gray-700 mb-0">Approval</p>
              </div>
              <div className="border-left border-gray-300"></div>
              <div className="px-5">
                <h3 className="text-warning mb-0">
                  <span
                    data-toggle="countup"
                    data-from="0"
                    data-to="85"
                    data-aos=""
                    data-aos-id="countup:in"
                    className="aos-init aos-animate counted"
                    >85</span
                  >%
                </h3>
                <p className="text-gray-700 mb-0">Work</p>
              </div>
              <div className="border-left border-gray-300"></div>
              <div className="pl-5">
                <h3 className="text-warning mb-0">
                  <span
                    data-toggle="countup"
                    data-from="0"
                    data-to="89"
                    data-aos=""
                    data-aos-id="countup:in"
                    className="aos-init aos-animate counted"
                    >89</span
                  >/<span
                    data-toggle="countup"
                    data-from="0"
                    data-to="100"
                    data-aos=""
                    data-aos-id="countup:in"
                    className="aos-init aos-animate counted"
                    >48</span
                  >
                </h3>
                <p className="text-gray-700 mb-0">Success ratio</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>

    <section className="py-6 py-md-8 border-bottom"  style={{backgroundColor: '#2f2f2f'}}>
      <div className="container">
        <div className="row align-items-center ml-8 justify-content-center">
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Amazon AWS"
            >
              <img src="images/amazonaws.svg" alt="AWS" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Android"
            >
              <img src="images/android.svg" alt="Android" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="MySQL"
            >
              <img src="images/mysql.svg" alt="MySQL" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="PHP"
            >
              <img src="images/php.svg" alt="Php" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="GCloud"
            >
              <img src="images/googlecloud.svg" alt="Google" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Django"
            >
              <img src="images/django.svg" alt="Django" />
            </div>
          </div>
        </div>
        <div
          className="row align-items-center ml-8 mt-8 icon-p-2 justify-content-center"
        >
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="CSS3"
            >
              <img src="images/css3.svg" alt="CSS" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Javascript"
            >
              <img src="images/javascript.svg" alt="Javascript" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="React"
            >
              <img src="images/react.svg" alt="React" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Angular"
            >
              <img src="images/angular.svg" alt="Angular" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Node Js"
            >
              <img src="images/node-dot-js.svg" alt="Node" />
            </div>
          </div>
          <div className="col-6 col-sm-4 col-md-2 mb-4 mb-md-0">
            {/* <!-- Brand --> */}
            <div
              className="img-fluid text-gray-600 mb-2 mb-md-0 svg-shim w-25"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Vue"
            >
              <img src="images/vue-dot-js.svg" alt="Vue" />
            </div>
          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>
    <section className="py-md-12 border-bottom">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 text-center">
            {/* <!-- Headin --> */}
            <h1 className="display-2 mt-2">Small team. Big hearts.</h1>

            {/* <!-- Text --> */}
            <p className="lead text-muted mb-7 mb-md-9">
              Our focus is always on finding the best people to work with.
            </p>
          </div>
        </div>
        {/* <!-- / .row --> */}
        <div className="row">
          <div className="col-12">
            <div className="col-md-12 col-sm-12 col-xs-12">
              <div className="client_section row col-md-12">
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Vishal <br />
                        Sharma
                      </h4>
                      <h6>"Founder & Director"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Vishal.png" alt="Vishal" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100002540294818" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/the_infinity_soul" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/vishal-sharma-9793021a0/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:contactinetworkhub@gmail.com"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Raj <br />
                        Keshri
                      </h4>
                      <h6>"Co-Founder & CEO"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Raj.png" alt="Raj" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/raj.keshri.756" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/_strange._life_" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/raj-keshri-b500b416a/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:contactinetworkhub@gmail.com"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Sauhard <br />
                        Mishra
                      </h4>
                      <h6>"Co-Founder & General Manager"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Sauhard.png" alt="Sauhard" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/sauhard.mishra.1" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/sauhard111" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/sauhard-mishra-907126185/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:contactinetworkhub@gmail.com"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="client_section row col-md-12">
                
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Arpit <br />
                        Dhakad
                      </h4>
                      <h6>"CTO & Marketing Head"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Arpit Dhakad.png" alt="Arpit" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/arpit.dhakad.7" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/arpitkd" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/arpit-dhakad-33a89b45/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Priyank <br />
                        Patidar
                      </h4>
                      <h6>"Senior Developer"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Priyank.png" alt="Priyank" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/priynk95" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/priyank.patidar" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/priyank-patidar-b58432103/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Varsha <br />
                        Kumari
                      </h4>
                      <h6>"Front end Developer/Web Designer"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Varsha Kumari.png" alt="Varsha" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100007930843360" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/its_potterhead_2611/" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/varsha-kumari-33b3b1183/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:vky261197@gmail.com"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                </div>
               
              </div>

              <div className="client_section row col-md-12">
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Abhishek <br />
                        Arya
                      </h4>
                      <h6>"Back end Developer"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Abhishek.png" alt="Abhishek" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/profile.php?id=100008723259135" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/inetwork_hub" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/theabhishekarya/" target="blank"
                          ><i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="mailto:"
                          ><i className="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="box col-md-3">
                  <div className="client_id">
                    <div className="name">
                      <h4>
                        Saptarshi <br />
                        Pattadar
                      </h4>
                      <h6>"BDE"</h6>
                    </div>
                    <div className="img-box">
                      <img src="images/Saptarshi.png" alt="Saptarshi" />
                    </div>
                    <ul className="social-icon-three">
                      <li>
                        <a href="https://www.facebook.com/saptarshi.inh.5" target="blank"
                          ><i className="fab fa-facebook-f"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.instagram.com/saptarshi.___pattadar" target="blank"
                          ><i className="fab fa-instagram"></i
                        ></a>
                      </li>
                      <li>
                        <a href="https://www.linkedin.com/in/saptarshi-p-9896031b9/" target="blank"
                          ><i className="fab fa-linkedin-in"></i
                        ></a>
                      </li>
                      <li>
                        <a href="mailto:salesinetworkhub@gmail.com"
                          ><i className="fab fa-google-plus-g"></i
                        ></a>
                      </li>
                    </ul>
                  </div>
                  
                </div>
                </div>
              
            </div>
            {/* <!-- / .row --> */}
          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>
    <section className="pt-6 pt-md-8 apply-btn">
      <div className="container pb-6 pb-md-8 border-bottom">
        <div className="row align-items-center">
          <div className="col-12 col-md">
            {/* <!-- Heading --> */}
            <h3 className="font-weight-bold mb-1">
              Interested in joining our team?
            </h3>

            {/* <!-- Text --> */}
            <p className="font-size-lg text-muted mb-5 mb-md-0">
              Hit us up and we'll get in touch with you.
            </p>
          </div>
          <div className="col-12 col-md-auto">
            {/* <!-- Button --> */}
            <a href="career.html" className="btn btn-primary lift"> Apply now </a>
          </div>
        </div>
        {/* <!-- / .row --> */}
      </div>
      {/* <!-- / .container --> */}
    </section>
            </div>
        );
    }
}

export default Team;