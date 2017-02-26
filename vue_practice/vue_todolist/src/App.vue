<template>
  <div id="app">
    <!-- 或者 <h1 v-text="title"></h1> -->
    <h1>{{title}}</h1>

    <img id="wow" src="./assets/wow.jpg" alt="logo">
    <p>1. 通过复选框查看是否完成：</p>
    <ul id="checkbox">
      <li>
        <input type="checkbox" value="Ace" v-model="checkedNames">
        <label for="Ace">Ace</label>
      </li>
      <li>
        <input type="checkbox" value="Anne" v-model="checkedNames">
        <label for="Anne">Anne</label>
      </li>
    </ul>
    <div>list为:{{checkedNames}}</div>
    <br>


    <p v-on:click="goPage2()">点击跳到页面2</p>
    <p>2. 通过输入框输入要完成的任务（localstorage可存储 即使刷新也存在）</p>
    <!-- keyup.enter 键盘敲击Enter键 执行addNew方法-->
    <input v-model="newItem" v-on:keyup.enter="addNew()">
    <ul>
      <li v-for="item in items" v-bind:class="{finished:item.isfinished}"
      v-on:click="toggleFinish(item)">
        {{item.label}}
      </li>
    </ul>
    <br>

    <p>3. 自定义组件：</p>
    <firstComponent></firstcomponent>
  </div>
</template>

<script>
// 引入
import store from './store'
import firstComponent from './components/firstComponent.vue'


export default {
  //data() 等价于 data:function(){ }
  data(){
    return{
      checkedNames:[],
      title:'Todo List',
      items:store.fetch()==null?[]:store.fetch(),
      newItem:''
    }
  },
  // 注册
  components:{firstComponent},

  watch:{
    items:{
      handler:function(items){
        store.save(items);
      },
      //深层赋值 两个值有一个值改变即有变化
      deep:true
    }
  },
  methods:{
    //点击事件发生之后class值会发生改变
    toggleFinish:function(item){
      item.isfinished=!item.isfinished
    },
    addNew:function(){
      this.items.push({
        label:this.newItem,
        isfinished:false
      })
      // 将input双向绑定的v-model清空
      this.newItem='';
    },
    goPage2:function(){
      this.$router.push('/page2');
    }
  }
}
</script>

<style>
html{
  height: 100%;
}
body{
  font-family:Helvetica,sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
}
.finished{
  text-decoration:line-through;
}
#checkbox{
  list-style: none;
}
#wow{
  width: 360px;
  height: 420px;
}
</style>
