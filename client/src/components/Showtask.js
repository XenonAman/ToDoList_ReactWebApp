import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
// var FontAwesome = require("react-fontawesome");
var counter = 0;
class Showtask extends Component {

  constructor(props) {
  super(props);

  this.state = {
    tasks: []
  };
}

  componentDidMount(){
    axios.get('/api/showtask')
    .then(response => this.setState({ tasks: response.data }));
  }

  render() {

    let temptask = "TempTask";

if(!this.state.tasks === null || !this.state.tasks === false)
{
console.log(this.state.tasks,"eksec");
if (this.state.tasks.length > 0) {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

                <div className="Sff">
                  <h3 className="Shead">To Do List</h3>


                  {
                    this.state.tasks.map((eachTask, i) =>{

            return(        eachTask.done ?
                        <div className="renderTask">
                              <Row>
                                <Col md={6}><h4 className="tname">{eachTask.task}</h4></Col>
                                <Col md={6}><h5 className="tdead">Deadline: {eachTask.time}</h5></Col>
                              </Row>
                              <Row>
                                <Col md={6}><h5 className="tdisp">{eachTask.disp}</h5></Col>
                                <Col md={6}><span className="gbtn">
                                  <button className="com">Completed</button>
                                  <button className="del">Delete</button>
                                </span></Col>
                              </Row>
                          </div>
                        :  <div className="crenderTask">
                              <Row>
                                <Col md={6}><h4 className="cname">{eachTask.task}</h4></Col>
                                <Col md={6}><h5 className="cdead">Deadline: {eachTask.time}</h5></Col>
                              </Row>
                              <Row>
                                <Col md={6}><h5 className="cdisp">{eachTask.disp}</h5></Col>
                                <Col md={6}><span className="gbtn">
                                  <button className="com">Remaining</button>
                                  <button className="del">Delete</button>
                                </span></Col>
                              </Row>
                          </div> )
                  })
                }
                </div>

{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
}
}

return (<h1> Processing </h1>);
  }
}

export default Showtask;
