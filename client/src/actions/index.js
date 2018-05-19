import axios from 'axios';
import { FETCH_TASK } from './types';

export const fetchTask = () => {
  return function(dispatch) {
    axios.get('/api/task')
    .then(res => dispatch ({ type: FETCH_TASK, payload: res}));
  }
};
