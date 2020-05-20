var express = require('express');
var router = express.Router();
// 引入自己写的数据库连接文件
var {connection_config,connection_fan} = require('../db/sql')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '我是后台服务程序' });
});



// 获取数据库中用户名和密码
router.get('/user_data', function(req, res, next) {
    //查询数据
    connection_config.query("SELECT * FROM user",function (error,results,fields) {
        res.json(results)
    })
});



// 获取数据库中几个大风场的经纬度
router.get('/lat_data', function(req, res, next) {
    //查询数据
    connection_config.query("SELECT * FROM subtype",function (error,results,fields) {
        res.json(results)
    })
});

//获取不同风场的实时数据
router.get('/fengchang_data', function(req, res, next) {
    var id = req.query[0]
    //根据id查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = "+id+" ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});


//下载history中的最近一段时间的7个数据
//塞罕坝风场数据10001
router.get('/fengchang_history', function(req, res, next) {
    var id = req.query[0]
    //根据id查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = "+id+" ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});


//下载history中的同一subtype下所有flag=2的数据，在后续处理中如果其status=2，则为故障数据，否则为虚假数据
router.get('/fengchang_error', function(req, res, next) {
    var id = req.query[0]
    //根据id查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = "+id+" AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});




//查询history库中报警数据，status为2，且subtype=所要查询的10001....,统计近15天不同风场的报警次数
//获取前N天时间
function GetDateStr(AddDayCount) {
    var dd = new Date();
    dd.setDate(dd.getDate()+AddDayCount);//获取AddDayCount天后的日期
    var y = dd.getFullYear();
    var m = (dd.getMonth()+1)<10?"0"+(dd.getMonth()+1):(dd.getMonth()+1);//获取当前月份的日期，不足10补0
    var d = dd.getDate()<10?"0"+dd.getDate():dd.getDate();//获取当前几号，不足10补0
    return y+"-"+m+"-"+d;
}
var historytime = GetDateStr(-860)

//获取history中总的报警次数
router.get('/total_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE  status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
        console.log(results);
    })
});

router.get('/fengchang_count', function(req, res, next) {
    var id = req.query[0]
    //根据id查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = "+id+" AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
        console.log(results);
    })
});

module.exports = router;
