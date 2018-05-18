import React, { Component } from 'react';
import logo from '../logo.png';
// var FontAwesome = require("react-fontawesome");

class Signup extends Component {
  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

                <form className="ff">

                  <img src={logo} alt="To Do" className="logo" />

                  <h3 className="head">SignUp</h3>
                  <input type="text" name="name" placeholder="&#xf13e; full name" className="input"/>
                  <br />
                  <br />
                  <input type="text" name="email" placeholder="&#xf13e; email" className="input"/>
                  <br />
                  <br />
                  <input type="password" name="password" placeholder="&#xf13e; password" className="input"/>
                  <br />
                  <br />
                  <input type="password" name="password" placeholder="&#xf13e; confirm password" className="input"/>
                  <br />
                  <br />
                  <input type="submit" value="SignUp" className="lbtn" />
                  <br />
                  <br />
                  <br />
                  <p className="nbtn">Alredy SignIn ? <button onClick={this.props.changeLog} className="reset">Login</button> </p>

                </form>

{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
  }
}

export default Signup;
