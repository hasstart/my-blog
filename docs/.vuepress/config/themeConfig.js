// 主题配置
module.exports = {
  nav:  [
    { text: '首页', link: '/' },
    {
      text: '页面杂谈',
      link: '/pages/7f4764/',
      items: [
        { text: 'HTML', link: '/pages/e42f0c/' },
        { text: 'CSS', link: '/pages/ef83a2/' },
        { text: 'JavaScript', link: '/pages/c13c31/' },
        { text: 'TypeScript', link: '/pages/76f4b0/' },
      ],
    },
    {
      text: '框架',
      link: '/pages/a787e4/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
      items: [
        // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
        {text: 'Vue', link: '/pages/bb33b9/'},
        {text: 'React', link: '/pages/ddcd99/' },
        // {text: 'Angular',link: '/pages/javascript4/' }
      ],
    },
    {
      text: '前端延展',
      link: '/pages/a9e92d',
      items: [
        { text: '前端安全', link: '/pages/d1fdc6/' },
        { text: '微信相关', link: '/pages/c926f9/' },
        // { text: '混合App', link: '/pages/686027/' },
        { text: 'Webpack', link: '/pages/b79286/' },
        { text: 'Node', link: '/pages/dcb6ce/' },
      ],
    },
    {
      text: '算法',
      link: '/pages/e46525/',
    },
    {
      text: '闲暇之余',
      link: '/pages/fcc60b/'
    }
  ],
  smoothScroll: true,
  sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
  logo: '/img/logo.png', // 导航栏logo
  repo: 'https://github.com/zhouyalongs/zhouyalongs.github.io', // 导航栏右侧生成Github链接
  searchMaxSuggestions: 10, // 搜索结果显示最大数
  lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
  docsDir: 'docs', // 编辑的文件夹
  editLinks: true, // 启用编辑
  editLinkText: '编辑',

  isShowReadTime: true, // 是否展示阅读时间
  // wordsPerMinute: 100, // 每分钟阅读的字数 默认是 300
  isShowReadCount: true, // 是否开启阅读量统计


  //*** 以下配置是Vdoing主题改动和新增的配置 ***//

  // category: false, // 是否打开分类功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含分类字段 2.页面中显示与分类相关的信息和模块 3.自动生成分类页面（在@pages文件夹）。如关闭，则反之。
  // tag: false, // 是否打开标签功能，默认true。 如打开，会做的事情有：1. 自动生成的frontmatter包含标签字段 2.页面中显示与标签相关的信息和模块 3.自动生成标签页面（在@pages文件夹）。如关闭，则反之。
  // archive: false, // 是否打开归档功能，默认true。 如打开，会做的事情有：1.自动生成归档页面（在@pages文件夹）。如关闭，则反之。
  // categoryText: '随笔', // 碎片化文章（_posts文件夹的文章）预设生成的分类值，默认'随笔'

  // bodyBgImg: [
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175828.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175845.jpeg',
  //   'https://cdn.jsdelivr.net/gh/xugaoyi/image_store/blog/20200507175846.jpeg'
  // ], // body背景大图，默认无。 单张图片 String || 多张图片 Array, 多张图片时每隔15秒换一张。
  // bodyBgImgOpacity: 0.5, // body背景图透明度，选值 0 ~ 1.0, 默认0.5

  // titleBadge: false, // 文章标题前的图标是否显示，默认true
  // titleBadgeIcons: [ // 文章标题前图标的地址，默认主题内置图标
  //   '图标地址1',
  //   '图标地址2'
  // ],
  // contentBgStyle: 1, // 文章内容块的背景风格，默认无. 1 => 方格 | 2 => 横线 | 3 => 竖线 | 4 => 左斜线 | 5 => 右斜线 | 6 => 点状

  // updateBar: { // 最近更新栏
  //   showToArticle: true, // 显示到文章页底部，默认true
  //   moreArticle: '/archives' // “更多文章”跳转的页面，默认'/archives'
  // },
  // rightMenuBar: false, // 是否显示右侧文章大纲栏，默认true (屏宽小于1300px下无论如何都不显示)
  // sidebarOpen: false, // 初始状态是否打开侧边栏，默认true
  // pageButton: false, // 是否显示快捷翻页按钮，默认true

  sidebar: 'structuring', // 侧边栏  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义    温馨提示：目录页数据依赖于结构化的侧边栏数据，如果你不设置为'structuring',将无法使用目录页

  author: {
    // 文章默认的作者信息，可在md文件中单独配置此信息 String | {name: String, link: String}
    name: 'zhouyalong', // 必需
    link: 'https://github.com/zhouyalongs', // 可选的
  },
  blogger: {
    // 博主信息，显示在首页侧边栏
    avatar: 'https://cdn.jsdelivr.net/gh/MssText/learn@master/images/49203535.35emn5vryma0.png',
    name: 'zhouyalong',
    slogan: '会当凌绝顶,一览众山小',
  },
  social: {
    // 社交图标，显示于博主信息栏和页脚栏
    iconfontCssFile: '//at.alicdn.com/t/font_1490075_giqxpk444o8.css', // 可选，阿里图标库在线css文件地址，对于主题没有的图标可自由添加
    icons: [
      {
        iconClass: 'icon-youjian',
        title: '发邮件',
        link: 'mailto:15515533605@163.com',
      },
      {
        iconClass: 'icon-github',
        title: 'GitHub',
        link: 'https://github.com/zhouyalongs',
      },
      {
        iconClass: 'icon-erji',
        title: '听音乐',
        link: 'https://music.163.com/#/my/m/music/playlist?id=5049085662',
      },
    ],
  },
  footer: {
    // 页脚信息
    createYear: 2021, // 博客创建年份
    copyrightInfo:
      'Zhouyalong | <a href="https://github.com/zhouyalongs" target="_blank">MIT License</a>', // 博客版权信息，支持a标签
  }
}
