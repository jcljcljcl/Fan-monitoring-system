// 这个配置在发布时候会和公共的配置合并
module.exports={
    configureWebpack:{
        //配置别名,@默认是src别名
        resolve:{
            alias:{
                'assets':'@/assets',
                'common':'@/common',
                'components':'@/components',
                'network':'@/network',
                'views':'@/views',
                'router':'@/router',
                'store':'@/store'
            }
        }
    },

    // 使用代理,代理到3000
    devServer: {
        proxy: {
            'api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    '^/api': '',
                }
            }
        }
    },

}
