import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{
    dark:false
  },
  routes: [//配置式路由
    { path: '/', component: '@/pages/index' },
    { path: '/test', component: '@/pages/test/index' },
  ],
  fastRefresh: {},
});
//routes配置路由，访问根路径时候,引入src目录下的pages的index组件

