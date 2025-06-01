module.exports = [
  {text: '首页', link: '/'},
   //目录页，vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  {
    text: '随笔', //01 
    link: '/web/', 
    items: [
      {text: '学习笔记', items:[
        {text: '《Git》笔记', link: '/note/git/'},
        {text: '《C++》笔记', link: '/note/CPLUS/'},
        {text: '《汇编》笔记', link: '/note/HUIBIANX86/'},
        {text: '《Cmake》笔记', link: '/note/cmake/'}
      ]},
    ]
  },
  /*
  {
    text: '编译', 
    link: '/bianyi/',
    items: [
      {text: 'cmake', link:  '/note/cmake/'}
      //{text: 'CSS', link: '/pages/0a83b083bdf257cb/'},
    ]
  },*/
  {
    text: '文章', // 03 技术文档
    link: '/technology/',
    
    items: [
      {text: '技术文档', link: '/pages/9a7ee40fc232253e/'},
      {text: 'WINDBG', link: '/pages/41f87d890d0a02af/'},
          /*
      {text: 'Nodejs', link: '/pages/117708e0af7f0bd9/'},
      {text: '博客搭建', link: '/pages/41f87d890d0a02af/'},
      */
    ]
  },
  {
    text: '更多', //03
    link: '/more/',
    items: [
      //{text: '学习方法', link: '/pages/f2a556/'},
      {text: '个人记录', link: '/pages/aea6571b7a8bae86/'},
      {text: '我的扩展', link: '/pages/ef942f/'},
      {text: '心情杂货', link: '/pages/2d615df9a36a98ed/'},
      {text: '友情链接', link: '/friends/'},
    ]
  },
  {
    text: '读书派',  // 04
    link: '/bookssent/',
    items: [
      {text: '摘抄收录', items: [

        {text: '☆ 励志鸡汤', link: '/ChickenSoup/'},
        {text: '✲ 小酒馆', link: '/Bistro/'},
        {text: '💀 疯狂的程序员', link: '/fkdcxy/'}
        
      ]}, 
      //link: '/pages/wordsof/'}
      {text: '读书笔记', items: [
        {text: '《格蠹汇编》', link: '/note/gdhb/'},
        {text: '《疯狂的程序员》', link: '/note/qbbfbb/'},
        {text: '《windows内核编程》', link: '/note/tsyd/'}
      ]}
    ]
  },
 //目录页结束
  {text: '关于', link: '/about/'},//05关于
  {
    text: '收藏',//06收藏
    link: '/pages/beb6c0bd8a66cea6/',
    items: [
      {text: '网站', link: '/pages/beb6c0bd8a66cea6/'},
      {text: '资源', link: '/pages/eee83a9211a70f9d/'}
    ]
  },
  {
    text: '索引',//
    link: '/archives/',
    items: [
      {text: '分类', link: '/categories/'},
      {text: '标签', link: '/tags/'},
      {text: '归档', link: '/archives/'},
    ]
  }
]