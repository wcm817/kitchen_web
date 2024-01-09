module.exports = {
  publicPath: '/',  // 基本路径
  outputDir: 'dist', // 构建时输出的文件夹
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/style/variable.scss";`
      }
    }
  },
  devServer: {
    host: 'localhost',
    proxy: {
      '/': {
        ws: false,
        target: 'http://127.0.0.1:8899',
        changeOrigin: true,
        pathWrite: {
        }
      }
    }
  }
}