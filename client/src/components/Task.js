import React, { Component } from 'react';
// import { reduxForm, Field } from 'redux-form';
// var FontAwesome = require("react-fontawesome");
import axios from 'axios';

class Task extends Component {

  state = {
    task: '',
    disp: '',
    time: ''
  }

  handleChangeTask = event => {
    this.setState({
      task: event.target.value
     });
  }
  handleChangeDisp = event => {
    this.setState({
      disp: event.target.value
     });
  }
  handleChangeTime = event => {
    this.setState({
      time: event.target.value
     });
  }

  handleSubmit = event => {
    event.preventDefault();

    const addtask = {
      task: this.state.task,
      disp: this.state.disp,
      time: this.state.time
    };

    axios.post('/api/todo', { addtask })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

handleSubmit(post) {
  this.setState({
    task: '',
    disp: '',
    time: ''
  });

}

  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

              <form
              onSubmit={this.handleSubmit}
              className="Tff">
              <br />
                <h3 className="Thead">Add Task</h3>
                <input type="text" name="task" onChange={this.handleChangeTask} placeholder="Task" className="Tinput" />
                <br />
                <br />
                <input type="text" name="disp" onChange={this.handleChangeDisp} placeholder="Description" className="Tinput" />
                <p className="right">not more then 20 characters.</p>
                <input type="text" name="time" onChange={this.handleChangeTime} placeholder="DeadLine i.e. 05:30 PM 19/02/2018" className="Tinput" />
                <br />
                <br />
                <br />
                <button type="submit" className="lbtn">Submit Task</button>
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
