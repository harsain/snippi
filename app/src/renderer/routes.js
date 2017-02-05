export default [
  {
    path: '/',
    name: 'home-page',
    component: require('components/AppView')
  },
  {
    path: '*',
    redirect: '/'
  }
]
