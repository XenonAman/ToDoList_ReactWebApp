import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
import reduxThunk from 'redux-thunk';
import "animate.css/animate.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
// import "font-awesome/css/font-awesome.min.css";
import './index.css';

import App from './components/App';
import reducers from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root'));
registerServiceWorker();
