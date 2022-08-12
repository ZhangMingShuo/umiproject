export default {
  state: 100, //跨组件共享的数据包
  reducers: {
    //相当于vuex中的mutations
    //
    increment(state, action) {
      let n = action.payload ? action.payload : 1;
      return state + n;
    },
    decrement(state) {
      return state - 1;
    },
  },
  effects: {
    //是一个
    //https://www.bookstack.cn/read/es6-3rd/spilt.1.docs-generator.md
    *incrementAsync(action, { call, put }) {
      let delay = (ms) => {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            console.log(action);
            resolve();
          }, ms);
        });
      };
      yield call(delay, 2000); //提交action,调用异步方法
      yield put({
        type: 'increment',
        payload: 1,
      }); //触发reducer
    },
  },
};
