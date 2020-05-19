import {request} from "./request";

export function getHistoryTotal(){
    return request({
        url:'/total_error'
    })
}