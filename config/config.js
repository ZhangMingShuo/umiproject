import { defineConfig } from 'umi';
import routes from './routes';
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  antd: {
    dark: false,
  },
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: 'Ant Design',
    locale: true,
    layout: 'side',
  },
  dva: {
    immer: false,
  },
  routes,
  fastRefresh: {},
});
//routes配置路由，访问根路径时候,引入src目录下的pages的index组件
