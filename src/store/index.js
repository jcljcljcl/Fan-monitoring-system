import Vue from 'vue'
import Vuex from 'vuex'
import {getLatData} from "network/home.js"
import {getUserData} from "network/login.js"

import  {getSubtypeData} from "network/subtype_data.js";
//安装插件
Vue.use(Vuex)
//创建对象
const store = new  Vuex.Store({
    //保存数据状态
    state: {
        // 经纬度
        latlong: [{
            lat: '',
            lng: ''
        }],
        params:0,
        //用户名和密码
        username:'',
        password:'',
        //subtype
        list :[{
            lat: '',
            lng: ''
        }],
        shebei:[],
        aaa:[]
    },
    //更改数据状态
    mutations: {
        //当外部需要数据时候会调用addData函数，将数据库风场经纬度数据存储到state中
        addData(state,payload){
            for (let i in payload){
                state.latlong.push({
                    'lat':payload[i].latitude,
                    'lng':payload[i].longtitude
                })}
        },

        //获取用户名和密码
        userInfo(state,payload){
            //console.log(payload);
            state.username = payload[0].username
            state.password = payload[0].password
        },

        //获取首页不同风场点击后的subtype值
        subtypedata(state,payload){
            state.aaa = payload
            for (let i in payload){
                // state.list.push({
                //     'lat':payload[i].latitude,
                //     'lng':payload[i].longtitude
                //  })

                state.shebei[i]={
                    'lat':payload[i].latitude,
                    'lng':payload[i].longtitude
                }
            }
            var sss  = JSON.parse(JSON.stringify(state.shebei));//把数据转化后赋予this.datalist
            console.log(state.shebei );
            console.log(sss);
        }
    },
    // action 可以包含异步操作
    actions: {
        //当Login.vue中的提交按钮点击后，获取数据库中的用户名和密码
        getUserInfo(context, params){
            getUserData().then(res =>{
                context.commit('userInfo',res)
            })
        },

        //当Login.vue中的提交按钮点击后，转到当前函数获取数据库中风场的位置
        updateLoopImg(context, params) {
            getLatData().then(res =>{
                context.commit('addData',res)
            })
        },

        //当Home中的sidebar点击后，根据不同的风场编号请求数据
        getSubTypeData(context,payload){
            getSubtypeData(payload).then(res => {
                context.commit("subtypedata",res)
            })
        }
    },
    getters:{

    },
    modules:{

    }
})
//导出
export default store