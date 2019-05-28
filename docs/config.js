docute.init({
    //自定义sidebar
    // toc: './toc.md',
    title:'移动订餐平台',
    landing: "landing.html",
    home: './introduce.md',
    plugins: [
      evanyou()
    ],
    vue:'/vue.md',
    announcement: {
        type: "danger", // warning | danger | success | primary
        html: '<a href="http://www.calamus.xyz">あやめ</a>'
    },
    sidebar: true,
    tocVisibleDepth: 3,
    marked: {
    smartypants: true
  },
    nav: [{
    path: '/',
    markdown: '## counter\n {{ count }}',
    component: {
      data() {
        return { count: 0 }
      }
    }
  },{
        title: "首页",
        path: "/introduce",
        source: 'introduce.md',
          }, 
          {
        title: "管理后台",
        path: "/pc",
        source: 'pc.md',
          }, 
          {
            title: "小程序端",
            path: "/wechat",
            source: 'wechat.md',
              },
              {
                title: "java后台",
                path: "/java",
                source: 'java.md',
                  },
          {
            title: "开发手册",
            path: "/dev",
            source: 'dev.md',
              }],
   icons: [{
        icon: 'github',
        label: 'Fork me on GitHub',
        link: 'https://github.com/calamus0427'
    },{
        icon: "twitter",
        label: "calamus",
        link:"https://github.com/calamus0427"
    },{
        icon: "edit",
        label: "calamus",
        link:"https://github.com/calamus0427" 
    },{
      label: 'Hovered!', 
      svgId: 'my-icon', 
      link: 'http://blah.blah'
    }],

});
