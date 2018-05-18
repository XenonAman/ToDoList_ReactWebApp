import React, { Component } from 'react';
import Dashboard from "./Dashboard";
import Signup from "./Signup";
import Login from "./Login";
import Landingpage from "./Landingpage";
import { Row, Col } from 'react-bootstrap';

class Start extends Component {

  constructor(){
    super();
    this.state ={
      number: true
    };
    this.changeLog = this.changeLog.bind(this);
    this.changeSign = this.changeLog.bind(this);
  }
  changeLog() {
    this.setState({
      number: !this.state.number
    });
  }
  changeSign() {
    this.setState({
      number: !this.state.number
    });
  }
  renderContent() {
    if (this.state.number) {
              return (<Signup changeLog={this.changeLog}/>);
          }
    else{
              return (<Login changeSign={this.changeSign} />);
    }
  }

// ========> jsx code from here <===========

  render() {
    return (
      <div className="App"> {/*====Main Div====*/}

      <div className="container-fluid">
{/*====Whitespace====*/}
{/*====Whitesoace====*/}
          <Row className="show-grid">
            <Col xs={12} md={8} className="col1">
              <Landingpage />
            </Col>
            <Col xs={12} md={4} className="col2">
              <Row className="show-grid login">
                {this.renderContent()}
              </Row>
            </Col>
          </Row>
{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
      </div>

      </div>  /*====End of Main Div====*/
    );
  }
}

export default Start;
