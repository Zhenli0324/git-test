<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <!-- 通过:age形式得到 数字类型的 18，可以通过运算符进行计算 -->
        <h2>学生年龄:{{age+1}}</h2>
    </div>
    
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'我是一个学生',
            }
        },
        // 1  简单声明接收
        // props:['name','sex','age']

        // 2 接收的同时限制参数类型
        // props:{
        //     name:String,
        //     age:Number,
        //     sex:String
        // }

        // 3  设置参数必要性、默认值等属性
        props:{
            name:{
                type:String,
                required:true, //参数必须
            },
            age:{
                type:Number,
                required:true, //参数必须
                default:99
            },
            sex:{
                type:String,
                required:true, //参数必须
            }
        }
    }
</script>

