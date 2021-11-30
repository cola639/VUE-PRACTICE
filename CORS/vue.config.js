module.exports = {
  devServer: {
    //my own Ip,port and https config

    open: false, //auto open
    // host: 'localhost',
    // port: 8080,
    // https: false,

    // CORS config
    proxy: {
      "/api": {
        target: "https://recordx.videocomm.net",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "https://recordx.videocomm.net",
        },
      },
    },
  },
};
