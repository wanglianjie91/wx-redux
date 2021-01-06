// 将store作为app的属性存储起来
function Provider(store:any){
  return function (appConfig:any){
    return Object.assign({}, appConfig, {store});
  }
}

export default Provider;