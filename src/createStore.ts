import { isPlainObject, isFunction } from './utils'
import { ActionType, StateType, ReducerType, StoreType, EnhancerType } from './redux.d'

function createStore(reducer: ReducerType,...rest:any[]) {
  
  let initialState: StateType = rest[0], enhancer: EnhancerType=rest[1];

  // 先判断增强器
  if (isFunction(rest[0]) && isFunction(rest[1])) {
    throw new Error('只接受一个增强其，请使用compose方法自行合并。');
  }
  if(isFunction(rest[0]) && rest[1] === undefined){
    initialState = {};
    enhancer = rest[0]
  }

  if (enhancer){
    return enhancer(createStore)(reducer, initialState);
  }

  // 初始state
  let state = Object.assign({}, initialState);

  // 初始reducer
  let currentReducer = reducer;
  // 
  let listeners:Array<()=>any|null> = [];

  // 获取state
  function getState():StateType{
    return state;
  }
  // dipatch
  function dispatch(action: ActionType){
    // action只能是普通对象
    if(!isPlainObject(action)){
      throw new Error('action 只能是普通对象！')
    }
    state = currentReducer(state, action);
    // dispatch 为state改变的唯一源
    listeners.forEach(function (item) {
      item()
    });
    return action;
  }

  // subscribe
  function subscribe(listener:()=>any){
    // reducer至少是一个function
    if (!isFunction(listener)) {
      throw new Error('listener 只能是function类型!')
    }
    listeners.push(listener);
    return function unsubscribe() {
      const index = listeners.indexOf(listener)
      listeners.splice(index, 1)
    }
  }

  // replaceReducer
  function replaceReducer(nextReducer: ReducerType){
    // reducer至少是一个function
    if(!isFunction(nextReducer)){
      throw new Error('reducer 只能是function类型!')
    }
    currentReducer = nextReducer;
  }

  // store
  const store: StoreType = {
    getState,
    dispatch,
    subscribe,
    replaceReducer
  }

  return store;
}

export default createStore;