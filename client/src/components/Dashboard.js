import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Animated } from "react-animated-css";
import Task from './Task';
import Showtask from './Showtask';

class Dashboard extends Component {

//var name ="Aman Mahato"

// ========> jsx code from here <===========

  render() {
    return (
      <div> {/*====Main Div====*/}

      <div className="container-fluid bg">
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

      <Animated
      animationIn="pulse"
      animationOut="fadeOut"
      isVisible={true}
      >
          <Row className="show-grid profile">
            <h2>{"Aman Mahato"}</h2>
            <h4>Total Task: 5</h4>
            <h4>Pendding Task: 3</h4>
          </Row>
      </Animated>

          <Row className="show-grid">
          <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
          >
            <Col xs={12} md={4} className="colLeft">
                <Task />
            </Col>
          </Animated>
            <Col xs={12} md={1} className="standLine">
                <div className="line"></div>
            </Col>
          <Animated
          animationIn="bounceIn"
          animationOut="fadeOut"
          isVisible={true}
          >
            <Col xs={12} md={7} className="colRight">
                <Showtask />
            </Col>
          </Animated>
          </Row>
{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
      </div>

      </div>  /*====End of Main Div====*/
    );
  }
}

export default Dashboard;
