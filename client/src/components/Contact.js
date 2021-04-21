import React, { Component } from 'react';
import axios from 'axios';

class ContactForm extends Component{

  constructor(props) {
    super(props)

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);
    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
        name: '',
        email: '',
        phone: '',
        message: ''
    }
}

onChangeName(e) {
  this.setState({ name: e.target.value })
}

onChangeEmail(e) {
  this.setState({ email: e.target.value })
}

onChangePhone(e) {
  this.setState({ phone: e.target.value })
}

onChangeMessage(e) {
  this.setState({ message: e.target.value })
}

onSubmit(e) {
  e.preventDefault()

  const userObject = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone,
      message: this.state.message
  };

  axios.post('/contact', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

        this.setState({ name: '', email: '', phone: '', message: '' })
    }

        render() {
         return (
          <div>
              <section className="contact_section layout_padding">
    <div className="container px-0">
      <div className="heading_container">
        <h2 className="ml-4">
          Con<span>ta</span>ct Us
        </h2>
      </div>

    </div>
    <div className="container container-bg">
      <div className="row">
        <div className="col-lg-8 col-md-7 px-0">
          <div className="map_container">
            <div className="map-responsive">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.628473620782!2d88.37374701427196!3d22.48059164200845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271319630fe67%3A0xbe51bef1a9d6b796!2sINetwork%20Hub!5e0!3m2!1sen!2sin!4v1614963238030!5m2!1sen!2sin" width="600" height="300" frameborder="0" style={{border:'0', width: '100%', height:'100%'}} allowfullscreen></iframe>
            </div>
          </div>
        </div>
        <div className="col-md-5 col-lg-4 px-0">
          <form id="contactForm" onSubmit={this.onSubmit}>
            <div>
              <input type="text" name="name" id="name" placeholder="Name" 
              value={this.state.name}
              onChange={this.onChangeName}
              required/>
            </div>
            <div>
              <input type="email" name="email" id="email" placeholder="Email" 
              value={this.state.email}
              onChange={this.onChangeEmail}
              required />
            </div>
            <div>
              <input type="number" name="phone" id="phone" placeholder="Phone" 
              value={this.state.phone}
              onChange={this.onChangePhone}
              required />
            </div>
            <div>
              <textarea name="message" id="message" cols="36" rows="4" className="message-box" placeholder="Message" 
              value={this.state.messsage}
              onChange={this.onChangeMessage}
              ></textarea>
            </div>
            <div className="d-flex ">
              <button type="submit" value="Contact Form">
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

          </div>
      );
}
}

/* class Contact extends React.Component {
    render () {

        
    }
} */

export default ContactForm;