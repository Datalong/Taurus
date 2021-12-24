import request from '@/utils/request' //import request.js里面的 service

export function login(data) {
  return request({
    baseURL: 'dev-api', //把原来放在env.developement的dev-api放到这里来 做个硬编码 这个是给模拟登录页配的
    /*baseurl:VUE_APP_BASE_API=lcalhost 所以访问登录的请求url:/localhost/vue-admin-template/user/login nginx是没得请求URL的 这个是本地的localhost，改到模拟服务器就改端口为9528*/
    url: '/vue-admin-template/user/login',
    method: 'post',
    data,
  })
}

export function getInfo(token) {
  //获取用户信息的接口
  return request({
    baseURL: 'dev-api',
    url: '/vue-admin-template/user/info',
    method: 'get',
    params: { token },
  })
}

export function logout() {
  //用户退出结口
  return request({
    baseURL: 'dev-api',
    url: '/vue-admin-template/user/logout',
    method: 'post',
  })
}
