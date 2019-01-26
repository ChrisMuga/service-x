import React from 'react';

//other dependancies
import axios from 'axios'
// import swal from 'sweetalert'
import alertify from 'alertifyjs'

// custom components
import  InlineButtons from './InlineButtons';

// custom css
import '../styles/Welcome.css'


import logo from '../images/logo.png';


class Welcome extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
                      email_address : '',
                      password      : '',
                    };

      //bind to class
      this.handleEmailChange    = this.handleEmailChange.bind(this);
      this.handlePasswordChange = this.handlePasswordChange.bind(this);
      this.handleSubmit         = this.handleSubmit.bind(this);
    }

    //email-address handler
    handleEmailChange(event) {
      this.setState({email_address : event.target.value});
    }
    //password handler
    handlePasswordChange(event) {
      this.setState({password : event.target.value});
    }

    handleSubmit(event) {
      axios.post('http://127.0.0.1:8000/api/', 
      {
        email_address : this.state.email_address,
        password      : this.state.password
      })
      .then(function (response) {
        // console.log(response.data);
        // swal("Good job!", "You clicked the button!", "success");
        alertify.success(response.data.email_address)
       
      })
      .catch(function (error) {
        
        alertify.error(String(error))
        
      });
      
      event.preventDefault();
    }
    render() {
      return  <div className = "row d-flex justify-content-center mid-level">
                <div className = "col-md-6">
                  <div className = "centralize">
                      <img src = {logo} alt = "Service X"/>
                  </div>
                  <h3 className = "text-left my-2">Service X</h3>
                  <form onSubmit = {this.handleSubmit}>
                    <input type = "text"      className = "form-control my-1 b0" placeholder = "Email Address"  value = {this.state.email_address}  onChange = {this.handleEmailChange}          required/>
                    <input type = "password"  className = "form-control my-1 b0" placeholder = "Password"       value = {this.state.password}       onChange = {this.handlePasswordChange}  required/>
                    <InlineButtons/>
                  </form>
                </div>

              </div>

              
    }
  }

  export default Welcome;