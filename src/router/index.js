import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/account/login'
import Index from '@/page/Index'
import home from '@/page/home/index'
import AddActicle from '@/page/data-manage/addArticle'
import ArticleList from '@/page/data-manage/articleList'
import ClassifyList from '@/page/data-manage/classifyList'
import UserList from '@/page/user-manage/userList'
import ManagerList from '@/page/user-manage/managerList'
import Explain from '@/page/explain/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'manage',
      component: Index,
      children:[{
        path: '',
        component: home,
        meta: []
      },{
        path: '/add-article',
        component: AddActicle,
        meta: ['发布文章']
      },{
        path: '/articlelist',
        component: ArticleList,
        meta: ['文章列表']
      },{
        path: '/classifylist',
        component: ClassifyList,
        meta: ['标签列表']
      },{
        path: '/user-manage/userlist',
        component: UserList,
        meta: ['用户管理','用户列表']
      },{
        path: '/user-manage/managerlist',
        component: ManagerList,
        meta: ['用户管理','管理员列表']
      },{
        path: '/explain',
        component: Explain,
        meta: ['说明']
      }]
    }
  ]
})
