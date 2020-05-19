import Vue from 'vue'
import Router from 'vue-router'

//导入组件
const Login =()=> import("../view/login/Login")
const DataAnalysis  =()=> import("../view/dataanalysis/DataAnalysis")
const Monitoring  =()=> import("../view/monitoring/Monitoring")
const Node  =()=> import("../view/node/Node")
const Settings  =()=> import("../view/settings/Settings")
const Home  =()=> import("../view/home/Home")

const Analysis =()=> import("../view/dataanalysis/Analysis")
const Predict =()=> import("../view/dataanalysis/Predict")
const Model =()=> import("../view/dataanalysis/Model")
const UserInfo =()=> import("../view/settings/UserInfo")
Vue.use(Router)

export default new Router({
    routes:[
        //默认打开登录页
        {
            path:'',
            redirect:'/login'
        },
        {
            path:'/login',
            component:Login
        },
        //首页
        {
            path:'/home',
            component:Home,
        },
        //数据分析
        {
            path:'/dataanalysis',
            component:DataAnalysis,
        },
        //用户管理
        {
            path:'/userinfo'  ,
            component:UserInfo
        },
        //数据分析下的 故障统计与分析
        {
            path:'/analysis',
            component:Analysis
        },
        {
          path:'/predict',
          component:Predict
        },
        {
            path:'/model',
            component:Model
        },

        //实时监测
        {
            path:'/monitoring',
            component:Monitoring
        },
        //节点管理
        {
            path:'/node',
            component:Node
        },
        //设置
        {
            path:'/settings',
            component:Settings
        },
    ],
    mode:'history'
})