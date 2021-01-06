import compose from './compose';

// store = Redux.applyMiddleware(...middlewares)(Redux.createStore)(reducer, ...)

function applyMiddleware(...middlewares:any[]){
  return function(createStore:any){
    return function(...args: any[]){
      // 原始store
      const store = createStore(...args);
      // dispatch
      let dispatch = store.dispatch;

      var middlewareAPI = {
        getState: store.getState,
        dispatch: (action: any) => dispatch(action)
      }

      const chain = middlewares.map(middleware => middleware(middlewareAPI));
      dispatch = compose(...chain)(store.dispatch);

      return {
        ...store,
        dispatch
      }
    }
  }
}

export default applyMiddleware;