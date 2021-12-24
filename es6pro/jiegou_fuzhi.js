//数组的结构
 const F4 = ['小沈阳', '刘能', '宋小宝', '赵四']
F4 = let ['shengyan', 'liuneng', 'xiaobao', 'zhaosi'] 
console.log(F4)
let shenyang = F4[0]
let zhaosi = F4[3]

console.log(shenyang) //这样太繁琐
console.log(zhaosi)
console.log(zhaosi)

//对象的结构 let{}
const abs = {
  userrname: '赵本山',
  age: '不祥',
  yanxiaopin: function() {
    console.log(演小品)
  },
  sex: '男',
  hometown:'廖琳',
}

let username = abs.userrname
let age = abs.age
let yanxiaopin = abs.yanxiaopin
//let {username, age, yanxiaopin} = abs

console.log(username)
console.log(age)
yanxiaopin()
