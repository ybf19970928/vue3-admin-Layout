module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/lejuAdmin': {
                target: 'http://leju.bufan.cloud',
                changeOrigin: true,
                pathRewrite: { '^': '' }
            }
        }
    }
}