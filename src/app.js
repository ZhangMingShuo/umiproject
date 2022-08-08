// umi 运行时配置
import { leancloudConfig } from '@/secrets';
import { message } from 'antd'
// 异步请求相关运行时配置
export const request = {
  requestInterceptors: [
    //请求拦截
    (url, options) => {
      console.log('请求拦截器', url, options);
      options.url = leancloudConfig.url + url; //从配置文件中加载leancloud服务接口配置
      options.headers = leancloudConfig.headers; //leancloud服务接口请求头配置
      return options; //此处是自定义请求配置
    },
  ],

  responseInterceptors: [
    //响应拦截
    async (response, options) => {
      let res = await response.json();
      console.log('响应拦截器', res, options);
      if(res.objectId&&options.method.toLowerCase()=='post'){
        message.success('新增成功');
      }
      return { data: res.results };
    },
  ],
};
