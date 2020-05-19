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


//下载realtime中的数据
//塞罕坝风场数据10001
router.get('/saihanba_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 10001 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//麒麟山风场数据10002
router.get('/qilinshan_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 10002 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//锡林浩特风场数据10003
router.get('/xilinhaote_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 10003 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
})
//红松洼风场数据10004
router.get('/hongsongwa_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 10004 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//依兰风场数据20001
router.get('/yilan_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 20001 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//昌图风场数据20002
router.get('/changtu_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 20002 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//东大桥风场数据30001
router.get('/dongdaqiao_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 30001 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//慈溪风场数据30002
router.get('/cixi_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 30002 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//南澳风场数据40001
router.get('/nanao_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 40001 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});
//上川岛风场数据40002
router.get('/shangchuandao_data', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM realtime WHERE subtype = 40002 ORDER BY id",function (error,results,fields) {
        res.json(results)
    })
});


//下载history中的最近一段时间的7个数据
//塞罕坝风场数据10001
router.get('/saihanba_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10001 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//麒麟山风场数据10002
router.get('/qilinshan_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10002 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//锡林浩特风场数据10003
router.get('/xilinhaote_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10003 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
})
//红松洼风场数据10004
router.get('/hongsongwa_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10004 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//依兰风场数据20001
router.get('/yilan_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20001 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//昌图风场数据20002
router.get('/changtu_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20002 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//东大桥风场数据30001
router.get('/dongdaqiao_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30001 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//慈溪风场数据30002
router.get('/cixi_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30002 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//南澳风场数据40001
router.get('/nanao_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40001 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});
//上川岛风场数据40002
router.get('/shangchuandao_history', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40002 ORDER BY sendtime DESC limit 7",function (error,results,fields) {
        res.json(results)
    })
});


//下载history中的同一subtype下所有flag=2的数据，在后续处理中如果其status=2，则为故障数据，否则为虚假数据
//塞罕坝风场数据10001
router.get('/saihanba_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10001 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//麒麟山风场数据10002
router.get('/qilinshan_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10002 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//锡林浩特风场数据10003
router.get('/xilinhaote_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10003 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
})
//红松洼风场数据10004
router.get('/hongsongwa_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10004 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//依兰风场数据20001
router.get('/yilan_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20001 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//昌图风场数据20002
router.get('/changtu_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20002 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//东大桥风场数据30001
router.get('/dongdaqiao_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30001 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//慈溪风场数据30002
router.get('/cixi_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30002 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//南澳风场数据40001
router.get('/nanao_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40001 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
        res.json(results)
    })
});
//上川岛风场数据40002
router.get('/shangchuandao_error', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40002 AND flag = 2 ORDER BY sendtime DESC",function (error,results,fields) {
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


//塞罕坝风场数据10001
router.get('/saihanba_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10001 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
        console.log(results);
    })
});
//麒麟山风场数据10002
router.get('/qilinshan_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10002 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//锡林浩特风场数据10003
router.get('/xilinhaote_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10003 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
})
//红松洼风场数据10004
router.get('/hongsongwa_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 10004 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//依兰风场数据20001
router.get('/yilan_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20001 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//昌图风场数据20002
router.get('/changtu_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 20002 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//东大桥风场数据30001
router.get('/dongdaqiao_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30001 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//慈溪风场数据30002
router.get('/cixi_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 30002 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//南澳风场数据40001
router.get('/nanao_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40001 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});
//上川岛风场数据40002
router.get('/shangchuandao_count', function(req, res, next) {
    //查询数据
    connection_fan.query("SELECT * FROM history WHERE subtype = 40002 AND status = 2 AND DATE(sendtime)>'" + historytime + "'",function (error,results,fields) {
        res.json(results)
    })
});

module.exports = router;
