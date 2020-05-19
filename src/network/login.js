// 登录页的网络请求
import {request} from "./request";
export function getUserData() {
    return request({
        url:'/user_data'
    })
}