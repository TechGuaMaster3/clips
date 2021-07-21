module.exports = {
  transpileDependencies: [
    'vuetify',
  ],
  publicPath: './',
  productionSourceMap: false,
  pages: {
    search: {
      entry: 'src/search.js',
      template: 'public/index.html',
      filename: 'search.html',
      title: '實況主中途之家 - 片片搜尋',
      chunks: ['chunk-vendors', 'chunk-common', 'search'],
    },
    list: {
      entry: 'src/list.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '實況主中途之家 - 片片剪輯區',
      chunks: ['chunk-vendors', 'chunk-common', 'list'],
    },
  },
  filenameHashing: true,

  css: {
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
};
