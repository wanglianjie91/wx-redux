interface PlainObj{
  [propName:string]:any;
}

// 是否是一个普通对象
export function isPlainObject(params:any) {
  return Object.prototype.toString.call(params) === '[object Object]'
}
// 是否是一个函数
export function isFunction(params:any) {
  return Object.prototype.toString.call(params) === '[object Function]'
}
// 比较data 和state是否相等
export function isEqual(data:PlainObj, state: PlainObj):boolean {
  const dataKeys = Object.keys(data);
  const stateKeys = Object.keys(state);
  
  const tempKeys = dataKeys.filter(key=>{
    data[key] !== state[key]
  });
  return tempKeys.length >0;
}