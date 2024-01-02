module.exports = {
  publicPath: './',  // 基本路径
  outputDir: 'dist', // 构建时输出的文件夹
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/style/variable.scss";`
      }
    }
  }
}