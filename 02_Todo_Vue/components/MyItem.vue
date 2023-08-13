<template>
    <li>
        <label>
          <!-- @change="handleCheck(todo.id)"  代表复选框状态改变则调用函数 -->
          <input type="checkbox"  :checked="todo.done" @change="handleCheck(todo.id)" />
          <!-- 如下代码也能实现功能，但是不推荐，因为违反了props只读的原则 -->
          <!-- <input type="checkbox"  v-model="todo.done"  /> -->
          <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
    </li>
</template>

<script>
export default {
    name:'MyItem',
    //声明接收todo对象  参数名todo
    props:['todo','checkTodo','deleteTodo'],
    methods: {
      handleCheck(id){
        this.checkTodo(id)
      },
      handleDelete(id){
        if(confirm('确认删除吗?')){
          this.deleteTodo(id)
        }
        
      }
    }
}
</script>



<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover{
  background-color: #ddd;
}

li:hover button{
  display: block;
}

.todo-enter-active{
  animation: todo 0.5s linear;
}

.todo-leave-active{
  animation: todo 0.5s linear reverse;
}

@keyframes todo {
  from{
    transform: translateX(100%);
  }
  to{
    transform: translateX(0px);
  }
}
</style>