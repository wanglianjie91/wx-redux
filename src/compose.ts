function compose(...funcs:any[]) {
  if (funcs.length === 0){
    return <T extends {}>(arg: T) => arg;
  }
  if (funcs.length === 1){
    return funcs[0]
  }

  const last = funcs[funcs.length - 1];
  const rest = funcs.slice(0, -1);

  return (args:any)=>{
    return rest.reduceRight((composed, f) => f(composed), last(args))
  }
}

export default compose;