var mysql = require('mysql')

//连接mysql下的config库
var connection_config = mysql.createConnection({
    //主机名
    host : 'localhost',

    //用户名和密码
    user : 'root',
    password : 'ksjcl2012',
    //访问的库名
    database : 'config'
})
//连接mysql下的fan库
var connection_fan = mysql.createConnection({
    //主机名
    host : 'localhost',

    //用户名和密码
    user : 'root',
    password : 'ksjcl2012',
    //访问的库名
    database : 'fan'
})

module.exports = {connection_config,connection_fan};