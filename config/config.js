import { defineConfig } from 'umi';
import routes from "./routes";
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd:{
    dark:false
  },
  routes,
  fastRefresh: {},
});
//routes配置路由，访问根路径时候,引入src目录下的pages的index组件

