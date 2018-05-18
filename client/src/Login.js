import React, { Component } from 'react';
import logo from '../logo.png';
var FontAwesome = require("react-fontawesome");

class Login extends Component {
  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

                <form className="ff">

                  <img src={logo} alt="To Do" className="logo" />

                  <h3 className="head">Login</h3>
                  <input type="text" name="email" placeholder=" &#xf13e; email" className="input"/>
                  <br />
                  <br />
                  <input type="password" name="password" placeholder=" &#xf13e; password" className="input"/>
                  <br />
                  <br />
                  <input type="submit" value="Login" className="lbtn" />
                  <br />
                  <br />
                  <br />
                  <p className="nbtn">New User ? <button onClick={this.props.changeSign} className="reset">Sign Up</button> </p>

                </form>


{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
  }
}

export default Login;
