// umi 运行时配置
import { leancloudConfig } from '@/secrets';

// 异步请求相关运行时配置
export const request = {
  requestInterceptors: [
    //请求拦截
    (url, options) => {
      console.log('请求拦截器', url, options);
      options.url = leancloudConfig.url + url;
      options.headers = leancloudConfig.headers;
      return options; //此处是自定义请求配置
    },
  ],

  responseInterceptors: [
    //响应拦截
    (response, options) => {
      console.log('请求拦截器', response, options);
      return response;
    },
  ],
};
