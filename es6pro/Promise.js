//异步编程的解决方案:文件的读取
//用require去调用扩展 fs是内置的模块 如何把模块映入进来
const fs = require('fs')
const p = new Promise((resfave, reject) => { //promise在文件读取的作用是它三个状态: 初始化状态 成功 失败 resfave,reject是函数的参数 分别把状态设置为成功 失败
  //执行异步操作
  fs.readFile('./他.txt',(err, data) => {
    //当文件读取失败的错误对象
    if (err) {
      console.log('文件读取失败')
      return
    }
    console.log('文件读取成功'+data.toString())
  })
})