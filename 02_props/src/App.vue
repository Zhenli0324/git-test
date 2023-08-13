<template>
   <div>
      <!-- :age="18" 加引号的意义在于 赋值引号内表达式的值
           不加引号代表传入了一个字符串 
           ：===  v-bind  -->
      <Student name='李四' sex="女" :age="18" />
      <Student name='王五四' sex="女" :age="18" />
      <Student name='第三方四' sex="男" :age="18" />

    </div>
</template>

<script>
import Student from './components/Student.vue'

// 引入所有的组件

export default {
  name: "App",
  //注册所有的组件
  components:{
    Student
  }
}
</script>

