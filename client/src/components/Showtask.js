import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import axios from 'axios';
import { Animated } from "react-animated-css";
// import { Link } from "react-router-dom";
// var FontAwesome = require("react-fontawesome");

class Showtask extends Component {

  constructor(props) {
  super(props);

  this.state = {
    tasks: []
  };

  // this.changeMode = this.changeMode.bind(this);
  this.delTask = this.delTask.bind(this);
}

  componentDidMount(){
    axios.get('/api/showtask')
    .then(response => this.setState({ tasks: response.data }));
  }

  //
  // changeMode = event => {
  //
  // }
  //
  delTask() {

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
          <Animated
          animationIn="fadeInRight"
          animationOut="fadeOut"
          isVisible={true}
          >
            <div className="crenderTask" key={eachTask._id}>
                  <Row>
                    <Col md={6}><h4 className="cname">{eachTask.task}</h4></Col>
                    <Col md={6}><h5 className="cdead">Deadline: {eachTask.time}</h5></Col>
                  </Row>
                  <Row>
                    <Col md={6}><h5 className="cdisp">{eachTask.disp}</h5></Col>
                    <Col md={6}><span className="gbtn">
                      <button  className="ccom"
                        onClick={() => {
                          console.log("Event Fire For Task Complete");
                          //
                          // const completed = {
                          //   getStat: eachTask.done
                          // };
                          // axios.put('/api/update/:eachTask._id', {completed})
                          // .then(response => console.log("Working"));
                        }
                      }
                      >
                        Remaining
                      </button>
                      <button onClick={this.delTask} className="cdel">
                        Delete
                      </button>
                    </span></Col>
                  </Row>
              </div>
            </Animated>
            : <Animated
              animationIn="fadeInRight"
              animationOut="fadeOut"
              isVisible={true}
              >
               <div className="renderTask"  key={eachTask._id}>
                    <Row>
                      <Col md={6}><h4 className="tname">{eachTask.task}</h4></Col>
                      <Col md={6}><h5 className="tdead">Deadline: {eachTask.time}</h5></Col>
                    </Row>
                    <Row>
                      <Col md={6}><h5 className="tdisp">{eachTask.disp}</h5></Col>
                      <Col md={6}><span className="gbtn">
                      <button  className="com"
                        onClick={() => {
                          console.log("Event Fire For Event Complete");
                        }
                      }
                      >
                          Completed
                        </button>
                        <button onClick={this.delTask} className="del">
                          Delete
                        </button>
                      </span></Col>
                    </Row>
                </div>
              </Animated>
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
