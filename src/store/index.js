//该文件用于创建Vuex中最为核心的store
import { setTimeout } from 'core-js'
import Vue from 'vue'
//引入Vuex
import Vuex from 'vuex'
//应用Vuex插件
Vue.use(Vuex)


//actions --用于响应组件中的动作
const actions ={

    //前面两者操作不包含业务逻辑，可以直接commit
    // jia(context,value){
    //     context.commit('JIA',value)
    // },
    // jian(context,value){
    //     context.commit('JIAN',value)
    // } 

    jiaOdd(context,value){
        console.log('actions中的jiaOdd被调用')
        if(context.state.sum %2 ){
            context.commit('JIA',value)
        }
    },

    jiaWait(context,value){
        console.log('actions中的jiaWait被调用')
        setTimeout(()=>{
            context.commit('JIA',value)
        },500)
        
    }



}

//mutations --用于操作数据
const mutations={
    JIA(state,value){
        console.log('mutations中的JIA被调用')
        state.sum+=value
    },
    JIAN(state,value){
        console.log('mutations中的JIAN被调用')
        state.sum-=value
    },
}

//准备state--存储数据
const state = {
    sum:0 //当前的和    
}

//创建并暴露Store
export default new Vuex.Store({
    actions,
    mutations,
    state,
})