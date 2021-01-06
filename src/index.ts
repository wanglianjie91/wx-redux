import { ReduxType } from './redux.d'
import createStore from './createStore'
import combineReducers from './combineReducers';
import bindActionCreators from './bindActionCreators';
import compose from './compose';
import applyMiddleware from './applyMiddleware';

const Redux:ReduxType = {
  createStore,
  combineReducers,
  bindActionCreators,
  compose,
  applyMiddleware
}

export default Redux;