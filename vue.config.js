module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
        ? '/'
        : '/',
    devServer: {
        proxy: {
            '/api': {
                target: 'http://192.168.188.242:8081/',
            }
        },
        host: 'localhost',
        port: "8082"
    },
    // outputDir:'test'
};