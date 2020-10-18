////导入
import {name,age,add,mes,class1} from "./bbb.js";

////变量
console.log('部分导出')
console.log('姓名：'+age,'年龄：'+name)

////函数
console.log(add(1,3))
console.log(mes())

////导入类
var n = new class1()
n.mess()

////导入是重新命名
import bbb from './bbb.js'
console.log(bbb)

////全部导入aaa.js
import * as aaa from './aaa.js'

console.log('部分导出')
console.log('姓名：'+age,'年龄：'+name)

console.log(add(1,3))
console.log(mes())

////导入类
var n = new class1()
n.mess()