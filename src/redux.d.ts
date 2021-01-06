export interface ActionType {
  type: string;
  payload?: any;
}

export interface StateType {
  [propName: string]: any;
};

export interface ReducersType{
  [propName: string]: ReducerType;
}

export type ReducerType = (state: StateType, action: ActionType) => StateType;
export type DispatchType = (action: ActionType) => ActionType;
export type ActionCreatorType = (...rest:any[]) => ActionType;
export type EnhancerType = (createStore: (reducer: ReducerType, initialState?: StateType) => StoreType) => (reducer: ReducerType, initialState?: StateType) => StoreType;

export interface MiddlewareAPI{
  getState: () => StateType;
  dispatch: DispatchType;
}
export type MiddlewareType = (middlewareAPI: MiddlewareAPI)=> any;

export interface StoreType {
  getState: () => StateType;
  dispatch: DispatchType;
  subscribe:(listener:()=>any)=> any;
  replaceReducer:(nextReducer: ReducerType)=>void;
}

export interface ReduxType {
  createStore: (reducer: ReducerType, initialState?: StateType, enhancer?: EnhancerType) => StoreType;
  combineReducers: (reducers: Reducers)=>ReducerType;
  applyMiddleware: (...middlewares: MiddlewareType[])=> any;
  bindActionCreators: (actioncreators: {[propName:string]:ActionCreatorType}, dispatch: DispatchType)=>any;
  compose:(...funcs:any[])=> ()=>any;
}
