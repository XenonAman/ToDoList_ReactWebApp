import React, { Component } from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Start from "./Start";
import { connect } from 'react-redux';
import * as actions from '../actions';

class App extends Component {

// ========> jsx code from here <===========

  render() {
    return (
      <div className="App"> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}
      <BrowserRouter>
      <div>
            <Route exact path="/" component={Start} />
            <Route exact path="/dashboard" component={Dashboard} />
      </div>
      </BrowserRouter>
{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
      </div>  /*====End of Main Div====*/
    );
  }
}

export default connect(null, actions)(App);
