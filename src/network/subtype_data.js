import {request} from "./request";

export function getSubtypeData(params){

    //读取塞罕坝数据
    if(params === "10001") {
        return request({
            url:'/saihanba_data'
        })
    }
    //读麒麟山数据
    if(params === "10002") {
        return request({
            url:'/qilinshan_data'
        })
    }

    //锡林浩特风场数据
    if(params === "10003") {
        return request({
            url:'/xilinhaote_data'
        })
    }
    //红松洼风场数据10004
    if(params === "10004") {
        return request({
            url:'/hongsongwa_data'
        })
    }
    //依兰风场数据20001
    if(params === "20001") {
        return request({
            url:'/yilan_data'
        })
    }
    //昌图风场数据20002
    if(params === "20002") {
        return request({
            url:'/changtu_data'
        })
    }
    //东大桥风场数据30001
    if(params === "30001") {
        return request({
            url:'/dongdaqiao_data'
        })
    }
    //慈溪风场数据30002
    if(params === "30002") {
        return request({
            url:'/cixi_data'
        })
    }
    //南澳风场数据40001
    if(params === "40001") {
        return request({
            url:'/nanao_data'
        })
    }
    //上川岛风场数据40002
    if(params === "40002") {
        return request({
            url:'/shangchuandao_data'
        })
    }

}
