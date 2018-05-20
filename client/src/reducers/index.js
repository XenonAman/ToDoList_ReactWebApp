import { combineReducers } from 'redux';
import taskReducer from './taskReducer';
import { reducer as reduxForm} from 'redux-form';

export default combineReducers({
  task: taskReducer,
  form: reduxForm
});
