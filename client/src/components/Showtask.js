import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
// var FontAwesome = require("react-fontawesome");

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

if(!this.state.tasks === null || !this.state.tasks === false)
{
if (this.state.tasks.length > 0) {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

    <div className="Sff">
      <h3 className="Shead">To Do List</h3>
      {/*this.state.tasks.length*/}
      {
        this.state.tasks.map((eachTask, i) =>{

        return(
          eachTask.done ?
            <div className="renderTask">
                  <Row>
                    <Col md={6}><h4 className="tname">{eachTask.task}</h4></Col>
                    <Col md={6}><h5 className="tdead">Deadline: {eachTask.time}</h5></Col>
                  </Row>
                  <Row>
                    <Col md={6}><h5 className="tdisp">{eachTask.disp}</h5></Col>
                    <Col md={6}><span className="gbtn">
                      <button className="com" onClick={this.props.changeMode}>Completed</button>
                      <button className="del" onClick={this.props.delTask}>Delete</button>
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
                      <button className="com" onClick={this.props.changeMode}>Remaining</button>
                      <button className="del" onClick={this.props.delTask}>Delete</button>
                    </span></Col>
                  </Row>
              </div>
            )
      })

    }
    </div>

{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
}
}

return (
  <div className="Sff">
    <h3 className="Shead">To Do List</h3>
  </div>
);
  }
}

export default Showtask;
