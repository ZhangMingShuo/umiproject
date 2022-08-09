export default [
  //配置式路由
  {
    path: '/',
    component: '@/pages/index',
    name: '项目首页',
  },
  {
    path: '/test',
    component: '@/pages/test/index',
    name: '测试',
  },
  {
    path: '/stu',
    name: '学员管理',
    routes: [
      {
        path: '/stu/list',
        component: '@/pages/stu/list',
        name: '学员列表',
      },
      {
        path: '/stu/pub',
        component: '@/pages/stu/pub',
        name: '学员录入',
      },
    ],
  },
  {
    path: '/cate',
    name: '分类管理',
    routes: [
      {
        path: '/cate/list',
        component: '@/pages/category/catelist',
        name: '分类列表',
      },
      {
        path: '/cate/pub',
        component: '@/pages/category/catepub',
        name: '分类发布',
      },
    ],
  },
  {
    path: '/banner',
    name: '轮播管理',
    routes: [
      {
        path: '/banner/list',
        component: '@/pages/banner/list',
        name: '轮播列表',
      },
      {
        path: '/banner/pub',
        component: '@/pages/banner/pub',
        name: '轮播发布',
      },
      {
        path: '/banner/edit',
        component: '@/pages/banner/edit',
        name: '轮播编辑',
        hideInMenu: true,
      },
    ],
  },
];
