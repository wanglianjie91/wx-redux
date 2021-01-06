/// <reference types="miniprogram-api-typings" />
import { StateType, DispatchType } from './redux.d';
import { isEqual } from './utils'

type MapStateToProps = (state: StateType)=>any;
type MapDispatchToProps = (dispatch: DispatchType)=>any;

// 默认的map方法
const defaultMapStateToProps: MapStateToProps = (state: StateType) =>({});
const defaultMapDispathToProps: MapDispatchToProps = (dispatch: DispatchType)=> ({dispatch});


function connect(mapStateToProps: MapStateToProps, mapDispatchToProps?: MapDispatchToProps){

  const mapState = mapStateToProps || defaultMapStateToProps;
  const mapDispatch = mapDispatchToProps || defaultMapDispathToProps;

  // 获取app对象
  const app = getApp();
  return function (pageConfig: WechatMiniprogram.Page.CustomOption){
    const _onLoad = pageConfig.onLoad;
    const _onUnload = pageConfig.onUnload;
    // 重写onLoad方法
    const onLoad = function(this:any,params:any){
      // 绑定store
      this.store = app.store;
      if(!this.store){
        throw new Error("store 不存在。");
      }
      // 订阅state变化更新data
      this.unsubscribe = this.store.subscribe(function(this:any){
        const state = this.store.getState();
        const mappedState = mapState(state);
        // 比较pre和next状态，优化渲染
        if (isEqual(this.data, mappedState)){
          return;
        }
        this.setData(mappedState);
      }.bind(this));
      // 调用原始onload方法
      _onLoad && _onLoad(params);
    }
    // 重写onUnload方法
    const onUnload = function(this:any) {
      this.unsubscribe && this.unsubscribe();
      _onUnload && _onUnload();
    }
    return Object.assign({}, mapDispatch(app.store.dispatch), pageConfig, { onLoad, onUnload});
  }
}

console.log(connect);

export default connect;