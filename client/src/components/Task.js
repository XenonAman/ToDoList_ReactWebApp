import React, { Component } from 'react';
import logo from '../logo.png';
// var FontAwesome = require("react-fontawesome");

class Task extends Component {
  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

                <form className="Tff">
                  <h3 className="Thead">Add Task</h3>
                  <input type="text" name="task" placeholder="Task" className="Tinput"/>
                  <br />
                  <br />
                  <input type="text" name="descp" placeholder="Description" className="Tinput"/>
                  <p className="right">not more then 20 characters.</p>
                  <input type="text" name="dtime" placeholder="DeadLine i.e. 05:30 PM 19/02/2018" className="Tinput"/>
                  <br />
                  <br />
                  <input type="submit" value="Add Task" className="lbtn" />
                  <br />
                  <br />
                  <br />
                  <br />
                </form>

{/*====Whitesoace====*/}
{/*====Whitesoace====*/}
       </div>  /*====End of Main Div====*/
    );
  }
}

export default Task;