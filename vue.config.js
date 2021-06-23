module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:9527',
                changeOrigin: true
            }
        }
    }
}