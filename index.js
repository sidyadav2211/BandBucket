
Vue.component('header-page',{
    template:'<h1><strong>BandBucket</strong></h1>'
})
// Vue.component('main-page',{
//     props:['product'],
//     template:'<li> {{product.title}} <br><span> Price :{{product.price}}</span> </li>'
// })

let head = new Vue({
    el:'#appHead',
    data:{
        productList:[
            {id:1,url:"Watches/Images/index.jpeg", title:' Gramin 943 for runner', MRP:500,price:200},
            {id:2,url:"Watches/Images/watch1.jpeg",title:' Gramin 943 for runner',MRP:500,price:300},
            {id:3,url:"Watches/Images/watch2.jpeg",title:' Gramin 943 for runner',MRP:500,price:400},
            {id:4,url:"Watches/Images/watch3.jpeg",title:' Gramin 943 for runner',MRP:500,price:500},
            {id:5,url:"Watches/Images/watch4.jpeg",title:' Gramin 943 for runner',MRP:500,price:500},
        ]
    }
})
// products
