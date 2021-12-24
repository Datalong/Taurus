import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true,
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true,
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard', //由于设置alwaysture 不会展示父节点，只会展示children子节点（首页）
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index'),
        meta: { title: '首页', icon: 'dashboard' },
      },
    ],
  },

  {
    path: '/core/integral-grade', //这个父路由加上下面path子路由才是完整的路由
    component: Layout, //和下面的component还不一样 它是布局组件，grade页面中负责侧边栏，上方导航路径部分
    redirect: '/core/integral-grade/list', //当你访问path结点的话，会默认自动跳转到redirect
    name: 'coreIntegralGrade', //name不管是在父子结点，还是兄弟结点都是唯一的
    meta: { title: '积分等级管理', icon: 'el-icon-s-marketing' },
    alwaysShow: true, //false(默认值): 当前仅当父节点下只有一个子节点时，不显示父节点；如果是true 任何时候都显示父节点的子节点
    children: [
      {
        path: 'list', //真正的路由地址
        name: 'coreIntegralGradeList', //每个路由结点的name不能相同，你起个名就行
        component: () => import('@/views/core/integral-grade/list'), //路由指向template模板组件比如list.vue
        meta: { title: '积分等级列表' }, //定义导航标题
      },
      {
        path: 'create',
        name: 'coreIntegralGradeCreate',
        component: () => import('@/views/core/integral-grade/form'),
        meta: { title: '新增积分等级' },
      },
      {
        path: 'edit/:id', //：id 是一个占位符，表示这部分url会是任何一个id
        name: 'coreIntegralGradeEdit',
        component: () => import('@/views/core/integral-grade/form'), //把组件模块导入生产测试中
        meta: { title: '编辑积分等级' },
        hidden: true, //让它不显示在左导航中，在编辑的修改按钮
      },
    ],
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '例子', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: '表格', icon: 'table' },
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: '树', icon: 'tree' },
      },
    ],
  },

  {
    path: '/form',
    component: Layout,
    meta: { title: '一级标题', icon: 'el-icon-goods' },
    alwaysShow: true,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: '表单', icon: 'form' },
      },
    ],
  },
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested',
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' },
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () =>
                  import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' },
      },
    ],
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' },
      },
    ],
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }, //在grade页面随便访问一个，他就根本没有路由，为啥呢它要整个路由表里面依次匹配，找不到对应的路由，最后到404，*代表所有的其他路由，最后匹配到*跳转到404 访问侧边栏是不会404的
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
