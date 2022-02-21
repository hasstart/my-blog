const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  theme: require.resolve('../../theme-vdoing'), // 使用本地主题
  title: "more than thing",
  description: '记录生活,点滴成长',
  markdown: {
    lineNumbers: true, // 代码行号
  },
  head,
  plugins,
  themeConfig,
}
