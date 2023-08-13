<template>
   <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <MyHeader :addTodo="addTodo" /> <br><br>
          <!-- 将App中的todos传入到MyList组件中 -->
          <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />  <br><br>  
          <MyFooter :todos="todos"/>  <br><br>
        </div>
      </div>
    </div>
</template>

<script>
// 数据数组和修改数据的方法都放在App组件中，子组件只能够调用相关方法
import MyFooter from './components/MyFooter.vue'
import MyHeader from './components/MyHeader.vue'
import MyList from './components/MyList.vue'
// 引入所有的组件

export default {
  name: "App",
  //注册所有的组件
  components:{
    MyFooter,
    MyHeader,
    MyList
  },

  data() {
    return {
        todos:[
            // done应该传入布尔值，不应该加引号
            {id:'001',title:'吃饭',done:true},
            {id:'002',title:'打游戏',done:false},
            {id:'003',title:'开车',done:false},
        ]
    }
    },

  methods: {
    addTodo(todoObj){
      this.todos.unshift(todoObj)
    },

    checkTodo(id){
      this.todos.forEach( (todo) =>{
        if(todo.id===id) todo.done=!todo.done})
    },

    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id!==id)
      }
  }

}
</script>


<style>
  /*base*/
  body {
    background: #fff;
  }

  .btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
  }

  .btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
  }

  .btn-edit {
    color: #fff;
    background-color: lightgreen;
    border: 1px solid green;
    margin-right: 5px;
  }

  .btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
  }

  .btn-edit:hover {
    color: #fff;
    background-color: green;
  }

  .btn:focus {
    outline: none;
  }

  .todo-container {
    width: 600px;
    margin: 0 auto;
  }
  .todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
</style>