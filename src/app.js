// umi 运行时配置
import { leancloudConfig } from '@/secrets';
import { message } from 'antd';
import { history } from 'umi';
import './utils/init-leancloud-sdk';
import HeaderDropMenu from '@/components/HeaderDropMenu';
// 异步请求相关运行时配置
export const request = {
  requestInterceptors: [
    //请求拦截
    (url, options) => {
      // console.log('请求拦截器', url, options);
      options.url = leancloudConfig.url + url; //从配置文件中加载leancloud服务接口配置
      options.headers = leancloudConfig.headers; //leancloud服务接口请求头配置
      return options; //此处是自定义请求配置
    },
  ],

  responseInterceptors: [
    //响应拦截
    async (response, options) => {
      let res = await response.json();
      // console.log('响应拦截器', res, options);
      if (res.objectId) {
        let method = options.method.toLowerCase();
        if (method == 'post' && res.sessionToken) {
          //根据LeanCloud登录时返回的数据包做登录逻辑
          message.success('登录成功');
        } else {
          let msg = method == 'post' ? '新增成功' : '更新成功';
          message.success(msg);
        }
      }
      let { results } = res;
      let data = results ? results : res;
      return { data };
    },
  ],
};

//初始化全局配置的运行时配置
export async function getInitialState() {
  //用户登录状态
  let userState = {
    isLogin: false,
    userInfo: null,
  };
  let info =
    localStorage.getItem('userInfo') || sessionStorage.getItem('userInfo');
  if (info) {
    userState = {
      isLogin: true,
      userInfo: JSON.parse(info),
    };
  }
  // const data = await fetchXXX();
  console.log('getInitialState', userState);
  return userState;
}

//layout运行时配置,自定义控制layout的渲染逻辑
export const layout = ({ initialState }) => {
  //自动透传
  return {
    onPageChange: () => {
      console.log('onPageChange', initialState);
      let { isLogin } = initialState;
      if (!isLogin) {
        history.push('/login');
      }
    },
    //https://procomponents.ant.design/components/layout#api
    rightContentRender: () => <HeaderDropMenu />,
  };
};
