import {ActionCreatorType, DispatchType } from './redux.d'

function bindActionCreators(actionCreators: {[propName:string]:ActionCreatorType}, dispatch: DispatchType){
  const keys = Object.keys(actionCreators);
  const boundActionCreators:any = {};
  keys.forEach(key=>{
    boundActionCreators[key] = (...rest:any[])=>{
      dispatch(actionCreators[key](...rest));
    }
  });
  return boundActionCreators;
}

export default bindActionCreators;