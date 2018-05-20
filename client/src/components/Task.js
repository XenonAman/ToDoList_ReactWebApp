import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import TaskField from './TaskField';
import * as action from '../actions';
// var FontAwesome = require("react-fontawesome");

class Task extends Component {

  render() {
    return (
      <div> {/*====Main Div====*/}
{/*====Whitespace====*/}
{/*====Whitesoace====*/}

              <form
              onSubmit={this.props.handleSubmit(values => console.log(values))}
              className="Tff">
              <br />
                <h3 className="Thead">Add Task</h3>
                <Field type="text" name="task" component={TaskField} placeholder="Task"/>
                <br />
                <Field type="text" name="disp" component={TaskField} placeholder="Description"/>
                <p className="right">not more then 20 characters.</p>
                <Field type="text" name="time" component={TaskField} placeholder="DeadLine i.e. 05:30 PM 19/02/2018"/>
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

function validate(values){
  const errors = {};

  if(!values.task){
    errors.title = 'Task input should not be empty';
  }

  return errors;
}

export default reduxForm({
  validate,
  form: 'taskForm'
})(Task);


// state.form.taskForm.values contain data
