# umi project

## Getting Started

Install dependencies,

```bash
$ yarn
```

Start the dev server,

```bash
$ yarn start
```

为request配置请求拦截器与响应拦截器  
[umi的运行时配置](https://v3.umijs.org/zh-CN/docs/runtime-config)  
约定`src/app.tx`为运行时配置
```js
export const request = {
  requestInterceptors:[//请求拦截
    (url,options)=>{
      console.log('请求拦截器',url,options)
      return options  //此处是自定义请求配置
    }
  ],

  responseInterceptors:[//响应拦截
    (response,options)=>{
      console.log('请求拦截器',response,options)
      return response
    }
  ]
}
``` 

