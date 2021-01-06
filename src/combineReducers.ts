import { ReducerType, ReducersType,StateType,ActionType } from './redux.d';

function combineReducers(reducers: ReducersType): ReducerType{
  // keys
  const keys = Object.keys(reducers);
  const combination: ReducerType = (state: StateType, action: ActionType)=>{
    // nextState
    const nextState: StateType = {};
    keys.forEach(key=>{
      const reducer = reducers[key];
      nextState[key] = reducer(state[key], action);
    })
    return nextState;
  };
  return combination;
}

export default combineReducers;