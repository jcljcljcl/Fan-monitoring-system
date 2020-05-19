import {request} from "./request";
export function getLatData(){
    return request({
        url:'/lat_data'
    })
}
