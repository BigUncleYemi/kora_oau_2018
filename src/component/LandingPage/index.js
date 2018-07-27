import React from 'react';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse justify-content-md-end" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Faq</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign in</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
);

const Header = () => (
  <div className="container p">
    <div className="row">
      <div className="col-sm-6 d-xs-none">
        <img src="https://www.freepngimg.com/download/atm_card/10-2-atm-card-png-pic.png" alt="Debit card" />
      </div>
      <div className="col-sm-6 my-auto">
        <div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus faucibus tincidunt felis eget cursus. 
          </h3>
        </div>
      </div>
    </div>
  </div>
);

const Section1 = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 mt-5 order-12 order-md-1">
        <h5
          style={{
            fontSize: '40px'
          }}>consectetur adipiscing elit.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula
          tincidunt nisl, vitae porta nisi tempus id. Aenean elementum fermentum eleifend.
          Fusce tincidunt, urna in volutpat condimentum, lectus lacus consectetur leo, vel
          iaculis erat risus ac tellus. Curabitur eget leo congue tellus venenatis auctor
          nec in ante.
            </p>
      </div>
      <div
        className="col-sm-6 order-1 order-md-12">
        <img alt="#" src="http://via.placeholder.com/350x300" className="img-responsive" width="100%" height="100%" />
      </div>
    </div>
  </div>
);

const Section2 = () => (
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-6 col-md-order-1 col-sm-order-2">
        <img alt="#" src="http://via.placeholder.com/350x300" className="img-responsive" width="100%" height="100%" />
      </div>
      <div className="col-sm-6 col-md-order-2 mt-5">
        <h5
          style={{
            fontSize: '40px'
          }}>consectetur adipiscing elit.</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vehicula
          tincidunt nisl, vitae porta nisi tempus id. Aenean elementum fermentum eleifend.
          Fusce tincidunt, urna in volutpat condimentum, lectus lacus consectetur leo, vel
          iaculis erat risus ac tellus.
            </p>
      </div>
    </div>
  </div>
);

const Join = () => (
  <div className="container my-5" id="Pricing">
    <center className="row">
      <div className="col-sm-12 mt-5">
        <p
          style={{
            fontSize: '20px',
            fontWeight: 'bolder'
          }}>Be a Part of The Big Change</p>
        <em>
          <i>we are open to all</i>
        </em>
      </div>
      <center className="col-sm-12 mt-5" style={{ display: 'flex', flexWrap: 'wrap' }}>
      </center>
    </center>
  </div>
);

const Sub = () => (
  <div className="container py-5 ">
    <div className="row">
      <div className="col-md-8">
        <p
          style={{
            fontSize: '20px',
            textTransform: 'capitalize'
          }}>
          Want to hear from us.<br />
          get our latest news and Happening.<br />
          Just a Subscribe to our newsletter.
            </p>
      </div>
      <div className="col-md-4" style={{ textAlign: 'center', paddingTop: '20px' }}>
        <a className="btn btn-outline-dark btn-lg m-auto" href="/Register">Join Us</a>
      </div>
    </div>
  </div>
);

const Contact = () => (
  <section className="container" style={{ padding: '80px 0' }} id="Contact">
    <div
      className="container"
      style={{
        visibility: 'visible'
      }}>
      <div className="row">
        <div className="col-md-12">
          <h3 style={{
            fontSize: '32px',
            color: '#111',
            textTransform: 'uppercase',
            textAlign: 'center',
            fontWeight: '700'
          }}>Contact Us</h3>
          <div style={{
            width: '50px',
            height: '3px',
            background: 'rgba(0, 0, 0, .1)',
            margin: '0 auto',
            marginBottom: '20px'
          }} />
          <p style={{
            textAlign: 'center',
            marginBottom: '40px'
          }}>If you need to get to us, here's our info.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6 col-md-push-2 my-4">
          <div style={{ fontSize: '17px' }}>
            <div>
              <i className="fa fa-envelope" />
              <p><a style={{ color: '#2f2f2f' }} href="mailto:info@Shomolu.com">info@Shomolu.com</a></p>
            </div>
            <div>
              <i className="fa fa-phone" />
              <p><a style={{ color: '#2f2f2f' }} href="tel:+234XXXXXXXXXXX">+234XXXXXXXXXXX</a></p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-md-push-2 my-4">
          <div className="form">
            <form method="post" className="contactForm">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 4 letters" />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  data-rule="email"
                  data-msg="Please enter a valid email" />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  data-rule="minlen:4"
                  data-msg="Please enter at least 8 letters of subject" />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  name="message"
                  rows={5}
                  data-rule="required"
                  data-msg="Please write something for us"
                  placeholder="Message"
                  defaultValue={''} />
                <div className="validation" />
              </div>
              <div className="text-center">
                <button className="btn btn-outline-dark btn-lg" type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer>
    <div className="jumbotron text-center" style={{ background: ' linear-gradient(to right, #000428, #004e92)' , color: 'white' }} >
      <div className="container" style={{ display: 'flex', flexWrap: 'wrap' }}>
        <div className="col-sm-4">
          <i className="fa fa-globe" style={{ fontSize: '30px' }} />
          <p>Vist Our Website</p>
          <p>www.Shomolu.com</p>
        </div>
        <div className="col-sm-4">
          <i className="fa fa-phone" style={{ fontSize: '30px' }} />
          <p>Call Us today.</p>
          <p>+234XXXXXXXXXX</p>
        </div>
        <div className="col-sm-4">
          <i className="fa fa-comments" style={{ fontSize: '30px' }} />
          <p>Chat With Us on Our Social Media Platforms.</p>
          <p style={{ marginBottom: '0px' }}><i className="fa fa-facebook-square" /> : <span>Shomolu.com</span></p>
          <p style={{ marginBottom: '0px' }}><i className="fa fa-twitter" /> : <span>@Shomolu.com</span></p>
          <p style={{ marginBottom: '0px' }}><i className="fa fa-instagram" /> : <span>Shomolu.com</span></p>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <p className="float-left d-inline-flex">
            <a className="navbar-brand">Shomolu.com</a>
            <p style={{paddingTop: '10px'}}>© 2017-2018 Hacktive Alpha Inc. · <a href="#">Privacy</a> · <a href="#">Terms</a></p>
          </p>
          <p className="float-right"><a href="#navbarNav">Back to top</a></p>
        </div>
      </div>
    </div>
  </footer>
);

const Lpage = () => (
  <div>
    <div>
      <Nav />
      <Header />
    </div>
    <Section1 />
    <Section2 />
    <Join />
    <Contact />
    <Sub />
    <Footer />
  </div>
);

export default Lpage;
