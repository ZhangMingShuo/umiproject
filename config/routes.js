export default [//配置式路由
  {
    path: '/',
    component: '@/pages/index' ,
    name: '项目首页'
  },
  {
    path: '/test',
    component: '@/pages/test/index',
    name: '测试'
  },
  {
    path: '/stu',
    name: '学员管理',
    routes:[
      {
        path:'/stu/list',
        component: '@/pages/stu/list',
        name: '学员列表'
      },
      {
        path:'/stu/pub',
        component: '@/pages/stu/pub',
        name: '学员录入'
      }
    ]
  }
]

