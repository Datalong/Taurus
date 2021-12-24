// @代表src

//引入axios的初始化模块
import request from '@/utils/request'

export default {
  //导出自带的默认模块

  //定义模块成员
  //成员方法，获取积分等级列表
  list() {
    //调用axios的初始化模块，发送远程ajax请求
    return request({
      url: 'http://localhost/admin/core/integralGrade/list',
      method: 'get',
    })
  },
}
