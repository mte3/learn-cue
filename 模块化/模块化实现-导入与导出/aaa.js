////全部导出


var name = '进口零零2'
var age = 200
var flag = false

function add(a,c){
    return a+c;
}
export function mes() {
    return '函数导出成功'
}
export {
    name,age,add
}
////导出类
export class class1 {
    mess(){
        console.log('导出类成功')
    }
}
