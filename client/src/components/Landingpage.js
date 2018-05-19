import React, { Component } from 'react';
import { Animated } from "react-animated-css";
import logo from '../logo.png';
//var FontAwesome = require("react-fontawesome");

class Landingpage extends Component {
  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

    <Animated
    animationIn="bounceInUp"
    animationOut="fadeOut"
    isVisible={true}>
        <img src={logo} alt="To Do" className="Mlogo" />
    </Animated>


{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
  }
}

export default Landingpage;
