const app = new Vue({
        el:'#app',
        data:{
            books:[
                {id:1,name:'游戏开发实战',data:'2012-02-13', price:125.00,ischeack:false,count:1},
                {id:2,name:'游戏开发详解',data:'2012-02-13',price:155.00,ischeack:false,count:1},
                {id:3,name:'项目开发基础教程',data:'2012-02-13',price:165.00,ischeack:false,count:1},
                {id:4,name:'Java语言程序设计',data:'2012-02-13',price:145.00,ischeack:false,count:1},
                {id:5,name:'从你的全世界来过',data:'2012-02-13',price:115.00,ischeack:false,count:1},
                {id:6,name:'跟任何人都聊得来',data:'2012-02-13',price:105.00,ischeack:false,count:1},
            ]
        },
    methods:{
            getFinalPrice(price) {
                return '￥' + price.toFixed(2)
            },
        subHandel(index ){
           if ( this.books[index].count>0){
               this.books[index].count--;
           }
        },
        addHandel(index){
            this.books[index].count++;
        },
        delHandel(index){
                this.books.splice(index,1);
        }
    },
    computed:{
            pay(){

                ////  1.普通for循环
                // let pay = 0
                // for(let i = 0;i<this.books.length;i++){
                //     pay +=this.books[i].price*this.books[i].count
                // }
                // return pay

                ////  2.for(let i in this.books)
                // let pay = 0
                // for(let i in this.books){
                //     pay +=this.books[i].price*this.books[i].count
                // }
                // return pay

                ////  3.for(let i in/of this.books)
                // let pay = 0
                // for(let i of this.books){
                //      pay +=i.count*i.price
                // }
                // return pay

                ////reduce做法
                return this.books.reduce(function (pre,books) {
                    return pre+books.price*books.count
                },0)
            }
    },
    filters:{
            PriceShow(price){
                return '￥'+price.toFixed(2)
            }
            ////过滤器￥10.00；￥12.32
    }

    }
)

//函数式编程
//filter/map/reduce的使用
//filter中的回调函数中必须有一个Boolean值，
// true：函数内部会自动将这次回调的N加入到新数组中。false：自动过滤这次的N。
const num = [12,51,45,45,333,485,16,59,964,253,1,50]

////nums是num中小于100的数；
////filter的使用
let nums = num.filter(function (N) {
    return N < 100
})
////结果：nums = [12, 51, 45, 45, 16, 59, 1, 50];

////nums1是nums中的数的两倍；
////map的使用
console.log(nums)
let nums1 = nums.map(function (N) {
    return N*2
})
console.log(nums1)
////结果：nums1 = [24, 102, 90, 90, 32, 118, 2, 100];

////3.reduce的使用
////作用：对数组中的所以内容汇总
let pay =  nums1.reduce(function (priValue,N) {
    return priValue +N
},0)
console.log(pay)
////结果：pay = 558;




////filter/map/reduce连在一起用
let pays = num.filter(function (N) {
    return N<100
}).map(function (N) {
    return  N*2
}).reduce(function (priValue,N) {
    return priValue+N
},0)
console.log(pays)



////最简单的filter/map/reduce
let pays1 = num.filter(n => n<100).map(n => n*2).reduce((pre,n) => pre+n);
console.log(pays1)