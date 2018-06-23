import axios from 'axios';
import { FETCH_TASK } from './types';
import { UPDATE_TASK } from './types';

export const fetchTask = () => {
  return function(dispatch) {
    axios.get('/api/showtask')
    .then(res => dispatch ({ type: FETCH_TASK, payload: res}));
  }
};

export const updateTask = () => {
  return function(dispatch) {
    axios.put('/api/update/:_id')
    .then(res => dispatch ({ type: UPDATE_TASK, payload: res}));
  }
};

export const saveTask = values => {
  return { type: 'save_task'};
};
