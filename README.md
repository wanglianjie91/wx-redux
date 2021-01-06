## wx-redux

#### 基于typescript的redux简化版轮子。
#### 保留核心API和常用基础功能。
#### 额外暴露Provider和connect方法，用于在微信小程序中使用redux。

使用方法。

1. 下载dist目录中的文件。
2. 编辑app.js

  ```js
    import Redux from 'Redux.js';
    import Provider from 'provider.js';
    
    // 创建store
    const store = Redux.creatStore(/*your reducers here*/);
    
    // store作为app的属性，可全局共享
    App(Provider(store)({/* your app config here*/}))
  ```

3. 编辑需要共享全局state的js文件。

```js
import connect from 'connect.js'

Page(connect((state)=>{}, (dispatch)=> dispatch){/*your pageconfig here*/})
```
