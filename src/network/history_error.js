import {request} from "./request";

export function getHistoryError(params){

    //发起携带参数的get请求，根据参数在数据库中获取对应数据
    return request({
        url:'/fengchang_error',
        params:params
    })
}
