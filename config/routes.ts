export default [
  {
    name: '登录',
    path: '/user',
    layout: false,
    routes: [{ path: '/user/login', component: './User/Login' }],
  },
  { path: '/', redirect: '/add_chart' },
  { name: '智能分析', path: '/add_chart', icon: 'barChart', component: './AddChart' },
  {
    name: '智能分析(异步)',
    path: '/add_chart_async',
    icon: 'barChart',
    component: './AddChartAsync',
  },
  { name: '我的图表', path: '/my_chart', icon: 'pieChart', component: './MyChart' },
  { name: '欢迎页面', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '管理员页面',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
