import React from 'react';


class Home extends React.Component {
    render () {
        return (
            <div>
                <div className="hero_area">
                <section className="slider_section">
      <div className="slider_container">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active">
              01
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1">
              02
            </li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2">
              03
            </li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      {/* <!-- <img src="images/slider (2).jpg" alt="INetworkHub" /> --> */}
                      <lottie-player src="json/design_agency.json" background="transparent"
                        speed="0.8"  loop autoplay>
                      </lottie-player>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Design
                        <br />
                        Agency
                      </h1>
                      <p>
                        Make the proper look On the Web With Our coming up Designing Solutions.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      {/* <!-- <img src="images/slider (1).jpg" alt="INetworkHub" /> --> */}
                      <lottie-player src="json/web-development.json" background="transparent"
                        speed="0.8"  loop autoplay>
                      </lottie-player>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Development
                        <br />
                        Agency
                      </h1>
                      <p>
                        We develop your ideas into consummated dreams.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 px-0">
                    <div className="img-box">
                      {/* <!-- <img src="images/slider (3).jpg" alt="INetworkHub" /> --> */}
                      <lottie-player src="json/content-writing.json" background="transparent"
                        speed="0.8"  loop autoplay>
                      </lottie-player>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="detail-box">
                      <h1>
                        Content
                        <br />
                        Writing
                      </h1>
                      <p>
                        INetwork Hub is a content writing agency offering content development services.
                      </p>
                      <a href="">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel_btn-box">
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="sr-only">Previous</span>
            </a>
            <img src="images/line.png" alt="line" />
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    </div>


  {/* <!-- service section --> */}

  <section className="service_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          Ser<span>vi</span>ces
        </h2>
        <p>
          Build Your Business with us
        </p>
      </div>
      <div className="row">
        <div className="col-lg-6 ">
          <div className="img-container tab-content">
            <div className="img-box tab-pane fade show active" id="img1" role="tabpanel">
              <img src="images/IllustrationWebDevelopment.svg" alt="Web Design" />
              {/* <!-- <lottie-player src="json/Web design.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
            </div>
            <div className="img-box tab-pane fade  " id="img2" role="tabpanel">
              <img src="images/IllustrationApplicationDevelopment.svg" alt="Web Development" />
              {/* <!-- <lottie-player src="json/Web development.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
            </div>
            <div className="img-box tab-pane fade  " id="img3" role="tabpanel">
              <img src="images/IllustrationWebDesign.svg" alt="App Development" />
              {/* <!-- <lottie-player src="json/App.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
            </div>
            <div className="img-box tab-pane fade  " id="img4" role="tabpanel">
              <img src="images/IllustrationSEO.svg" alt="Chatbots" />
              {/* <!-- <lottie-player src="json/chatbot.json" background="transparent"
              speed="0.8" style="margin-left: -90px;" loop autoplay></lottie-player> --> */}
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="detail-container nav nav-tabs" id="myTab" role="tablist">
            <div className="detail-box active" id="img1-tab" data-toggle="tab" href="#img1" role="tab" aria-selected="true">
              <h4>
                Web <br />
                Design
              </h4>
              
            </div>
            <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img2" role="tab" aria-selected="false">
              <h4>
                Website <br />
                Development
              </h4>
            </div>
            <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img3" role="tab" aria-selected="false">
              <h4>
                App <br />
                Development              
              </h4>
            </div>
            <div className="detail-box" id="img2-tab" data-toggle="tab" href="#img4" role="tab" aria-selected="false">
              <h4>
                AI <br /> Chatbots <br />
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="btn-box">
        <a href="services.html">
          View All
        </a>
      </div>
    </div>
  </section>

  {/* <!-- end service section --> */}
    <section className="portfolio_section ">
      <div className="heading_container">
        <h2>
          Por<span>tf</span>olio
        </h2>
        <p>
          See how businesses like yours found solutions with INetwork Hub.
        </p>
      </div>
      <div className="portfolio_container py-10">
        <div className="box-1">
          <a href="portfolio.html">
          <div className="img-box">
            <img src="images/upcoming.jpg" data-filter=".upcoming" alt="Upcoming" />
            <div className="btn-box">
             <h2 className="text-center">Websites</h2>
            </div>
          </div>
        </a>
          <a href="portfolio.html">
            <div className="img-box">
              <img src="images/live.jpg" alt="Live" />
              <div className="btn-box">
                <h2>Upcoming Websites</h2>
              </div>
            </div>
          </a>
        </div>
        <div className="box-2">
          <a href="portfolio.html">
            <div className="img-box b-3">
              <img src="images/graphic.jpg" alt="Graphics" width="120px" height="120px" />
              <div className="btn-box">
                <h2>Graphics</h2>
              </div>
            </div>
          </a>
          <a href="portfolio.html">
            <div className="img-box b-4">
              <img src="images/logos.jpg" alt="Logos" />
              <div className="btn-box">
                <h2>LOGOS</h2>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>

  {/* <!-- logo section --> */}

  <section className="logo_section layout_padding">
    <div className="container">
      <div className="heading_container">
        <h2>
          A N<span>EW</span> Logo <br />
          FOR YOUR COMPANY
        </h2>
        <p>
          From business websites to entertainment websites we out do them all.
        </p>
      </div>
    </div>
    <div className="logo_container layout_padding">
      <div className="carousel-wrap">
        <div className="owl-carousel" id="owl-example">
          <div className="item">
            <div className="box  b1">
            <a href="http://www.manalytica.in/">
              <div className="img-box">
                <img src="images/logo(4).png" alt="MAnalytica" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
            </a>
            </div>
          </div>
          <div className="item">
            <div className="box b2">
              <a href="http://www.daretodream.co.in/">
              <div className="img-box">
                <img src="images/logo(5).png" alt="Dare to Dream" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="box  b1">
              <a href="https://poochoh.com/">
              <div className="img-box">
                <img src="images/logo.png" alt="Poochoh" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
              </a>
            </div>
          </div>
          <div className="item">
            <div className="box b2">
              <a href="https://inetworkhub.com/">
                <div className="img-box">
                  <img src="images/My11Beast.png" alt="My11Beast" />
                </div>
                <div className="detail-box">
                  <h4>
                    
                  </h4>
                </div>
                </a>
            </div>
          </div>
          <div className="item">
            <div className="box  b1">
              <a href="http://www.wowwordsofwise.co.in/">
                <div className="img-box">
                  <img src="images/logo(8).png" alt="WoW" />
                </div>
                <div className="detail-box">
                  <h4>
                    
                  </h4>
                </div>
                </a>
            </div>
          </div>
          <div className="item">
            <div className="box b2">
              <div className="img-box">
                <img src="images/logo_infi.png" alt="Infinexy" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box  b1">
              <div className="img-box">
                <img src="images/processed.jpeg" alt="Wellhunus" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="box b2">
              <div className="img-box">
                <img src="images/processed2.jpeg" alt="Surya Pharma" />
              </div>
              <div className="detail-box">
                <h4>
                  
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* <!-- end logo section --> */}

    <section className="started_section pt-10 pb-8">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <div className="detail-box">
              <div className="heading_container">
                <h2>
                  Lets <span>Get</span> Started <br />
                  Your Project
                </h2>
                <p>
                  Get in touch with our team of experts and we will let you know what is best for bussiness.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 offset-md-1">
            <div className="btn-box">
              <a href="contact.html">
                Let’s talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    <section className="team layout_padding-bottom pt-10">
      <div className=" client_section">
        <div className="heading_container">
          <h2 className="pb-8">
            Our <span>Team</span> Members
          </h2>
        </div>
        <div className=" row col-md-12">
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
                  <a href="https://www.facebook.com/raj.keshri.756" target="blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/_strange._life_" target="blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/raj-keshri-b500b416a/" target="blank">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:contactinetworkhub@gmail.com">
                    <i className="fab fa-google-plus-g"></i>
                  </a>
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
                  <a href="https://www.facebook.com/sauhard.mishra.1" target="blank">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/sauhard111" target="blank">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sauhard-mishra-907126185/" target="blank"
                    ><i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:contactinetworkhub@gmail.com"
                    ><i className="fab fa-google-plus-g"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
          <div className="btn-box pt-10">
            <a href="team.html">
              View All
            </a>
          </div>
      </div>
    </section>

    <section className="pt-7 pt-md-10" style={{backgroundColor: '#2F2F2F'}}>
      <div className="container">
        <div className="row align-items-center mb-5 heading-blog">
          <div className="col-12 col-md text-white">

            {/* <!-- Heading --> */}
            <h3 className="mb-0">
              Latest Blog
            </h3>

            {/* <!-- Text --> */}
            <p className="mb-0">
              Here’s what we've been up to recently.
            </p>
            
          </div>
          <div className="col-12 col-md-auto ">

            {/* <!-- Button --> */}
            <a href="blog.html" className="btn btn-sm btn-outline-yellow ">
              View all
            </a>

          </div>
        </div>{/*  <!-- / .row --> */}
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="blog-single-1.html">

                {/* <!-- Image --> */}
                <img src="images/Beginner-guide-to-creating-a-business-website-4.jpg" alt="..." className="card-img-top" />

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="blog-single-1.html">

                {/* <!-- Heading --> */}
                <h3>
                  Importance of having a business website
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Living in the digital world, a website is crucial for any business.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="blog-single-1.html">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm mr-2">
                  <img src="images/avatar-male.png" alt="..." className="avatar-img rounded-circle" />
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted mr-2 mb-0">
                  Sauhard
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                  <time datetime="2020-12-15">Jan 12</time>
                </p>

              </a>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-lg-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="blog-single-2.html">

                {/* <!-- Image --> */}
                <img src="images/stat.jpg" alt="..." className="card-img-top" />

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="blog-single-2.html">

                {/* <!-- Heading --> */}
                <h3>
                  Static vs Dynamic Website
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Websites are separated into two different types: static and dynamic.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="blog-single-2.html">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm mr-2">
                  <img src="images/avatar-male.png" alt="..." className="avatar-img rounded-circle" />
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted mr-2 mb-0">
                  Raj
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                  <time datetime="2020-12-15">Feb 07</time>
                </p>

              </a>

            </div>

          </div>
          <div className="col-12 col-md-6 col-lg-4 d-flex">

            {/* <!-- Card --> */}
            <div className="card mb-6 mb-md-0 shadow-light-lg lift lift-lg">

              {/* <!-- Image --> */}
              <a className="card-img-top" href="blog-single-3.html">

                {/* <!-- Image --> */}
                <img src="images/good-website-security-plan.jpg" alt="..." className="card-img-top" />

                {/* <!-- Shape --> */}
                <div className="position-relative">
                  <div className="shape shape-bottom shape-fluid-x svg-shim text-white">
                    <svg viewBox="0 0 2880 480" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2160 0C1440 240 720 240 720 240H0v240h2880V0h-720z" fill="currentColor"></path></svg>
                  </div>
                </div>

              </a>

              {/* <!-- Body --> */}
              <a className="card-body" href="blog-single-3.html">

                {/* <!-- Heading --> */}
                <h3>
                  Why Website Security is Important?
                </h3>

                {/* <!-- Text --> */}
                <p className="mb-0 text-muted">
                  Website security is important because nobody wants to have a hacked website.
                </p>

              </a>

              {/* <!-- Meta --> */}
              <a className="card-meta mt-auto" href="blog-single-3.html">

                {/* <!-- Divider --> */}
                <hr className="card-meta-divider" />

                {/* <!-- Avatar --> */}
                <div className="avatar avatar-sm mr-2">
                  <img src="images/avatar-male.png" alt="..." className="avatar-img rounded-circle" />
                </div>

                {/* <!-- Author --> */}
                <h6 className="text-uppercase text-muted mr-2 mb-0">
                  Vishal
                </h6>

                {/* <!-- Date --> */}
                <p className="h6 text-uppercase text-muted mb-0 ml-auto">
                  <time datetime="2020-12-15">Mar 05</time>
                </p>

              </a>

            </div>

          </div>
         
        </div> {/* <!-- / .row --> */}
      </div> {/* <!-- / .container --> */}
      <br /><br />
    </section>

    <section className="pt-8 pt-md-12 mb-10 testimonial bg-white">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 text-center">

          {/* <!-- Heading --> */}
          <h2>
            What our customers says 
          </h2>

          {/* <!-- Text --> */}
          <p className="font-size-lg text-muted mb-7 mb-md-9">
            
          </p>

        </div>
      </div>
      <div className="carousel" data-flickity='{ "wrapAround": true, "autoPlay": true }'>
        <div className="carousel-cell client_section" >
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Ms. Ayushi<br />
                  Sharma
                </h4>
              </div>
              <div className="img-box">
                <img src="images/avatar-female.png" alt="Ayushi" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                "INetwork Hub has done the best to uplift my startup, they made my startup alive, only because of their team, many writers and authors get to know about us! A huge thanks to INetwork Hub and its team, for making my dream bloom and taking every possible step to help me reach more viewers! Their creativity is at par, the changes which they make accordingly has its own excellence, and they have always given me a little extra, as far as my requirements were concerned, so yeah, I would say, that INetwork Hub helped to create the best icing on my cake, metaphorically! Thank you INetwork Hub and its' team, much love❤️"
              </p>
              <img src="images/quote.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="carousel-cell client_section" >
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Mr. Yousuf<br />
                  Ali Haqqani
                </h4>
              </div>
              <div className="img-box">
                <img src="images/avatar-male.png" alt="Yousuf" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                "To excel in showbiz one needs excellent projection. When we thought of our production's website, we were very sure to have a great-glam interface. INetwork Hub not only provided us that interface but they designed our website with such a creative way that it platters all our creations on the computer screen. Getting a great response from peer and clients. Thank you INetwork Hub for designing a dream website for us."
              </p>
              <img src="images/quote.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="carousel-cell client_section" >
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Mr. Mahendra<br />
                  Keshri
                </h4>
              </div>
              <div className="img-box">
                <img src="images/avatar-male.png" alt="Mahendra" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                "I have had the opportunity to avail the services of INetwork Hub to develop my Website for my Business. I found them going above and beyond in providing their Services to me. INetwork Hub Project Manager Sauhard Mishra is exceptional. His patience, professionalism, duty of care towards his clients - are highly praise-worthy and I couldn't have done it without Sauhard. I would want to recommend Sauhard Mishra of the exceptional INetwork Hub Team to everyone for his diligent performance, customer service and above all - their reliability. Thank you INetwork Hub Team."
              </p>
              <img src="images/quote.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="carousel-cell client_section" >
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Mr. Krishna<br />
                  Kant
                </h4>
              </div>
              <div className="img-box">
                <img src="images/avatar-male.png" alt="Krishna" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                "Hey INetwork Hub Team, Thanks for the work you have done for us, it looks fantastic! I do really appreciate it. Many thanks for a great website, we are extremely pleased with the result. Finally, I would like to say thanks for a great job and I am over the moon with the finished work I would recommend you to Everyone."
              </p>
              <img src="images/quote.png" alt="image" />
            </div>
          </div>
        </div>
        <div className="carousel-cell client_section" >
          <div className="box">
            <div className="client_id">
              <div className="name">
                <h4>
                  Mr. Chintan<br />
                  Maganlal Kakkad
                </h4>
              </div>
              <div className="img-box">
                <img src="images/avatar-male.png" alt="Chintan" />
              </div>
            </div>
            <div className="detail-box">
              <p>
                "When it comes to creating professional, attractive, and effective websites, there is no company that can surpass INetwork Hub.  Thanks to their talent, our site has taken off in the search engines like a rocket.  In this day and age, it is impossible to get ahead as a business without the support of gurus like INetwork Hub standing behind you. The attention is fabulous and the staff is superb.  In a matter of days, I had a tremendous proposal, above and beyond our expectations.  We could not have picked a better team of professionals to represent us.  They are and will remain my "web guys" in the future to come."
              </p>
              <img src="images/quote.png" alt="image" />
            </div>
          </div>
        </div>
      </div>
    </section>
    
    
            </div>
        );
    }
}

export default Home;