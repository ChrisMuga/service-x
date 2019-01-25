import React, { Component } from 'react';

// custom components
import  InlineButtons from './InlineButtons';

// custom css
import '../styles/Welcome.css'

import logo from '../images/logo.png';


class Welcome extends React.Component {
    render() {
      return  <div class = "row d-flex justify-content-center mid-level">
                <div class = "col-md-6">
                  <img src = {logo} alt = "Service X"/>
                  <h1 class = "text-left">Hello, World!</h1>
                  <form action = "" method = "post">
                    <input class = "form-control my-1 b0" placeholder = "Email Address" required/>
                    <input class = "form-control my-1 b0" placeholder = "Passqord"      required/>
                    <InlineButtons/>
                  </form>
                </div>
                
              </div>
    }
  }

  export default Welcome;