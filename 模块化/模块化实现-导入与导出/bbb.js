////部分导出


var name = '国产零零1'
var age = 100
var flag = true
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


////一个js文件只能有一个default，由导出者命名
const mesa = '面对疾风咯'
export default mesa