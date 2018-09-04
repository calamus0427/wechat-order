## vue+element开发管理后台示例

![img](./img/Vue+element管理后台.jpg)

![img](./img/demo1.gif)

- ### 安装依赖
    - vue
    - vue-router
    - element

安装好之后的文件目录：

![img](./img/project.png)

- ### 项目整体布局

布局如下图：

![img](./img/layout.png)

简单实现如下：

![img](./img/layout-js.png)

Aside等空间就用自己单独写的组件来拼接成一个完整的单页面应用
main放项目展示内容，通过左侧nav点击链接router来控制展示内容

![img](./img/layout-cl.png)

- ### 开发菜单栏并设置路由

期望效果：

![img](./img/cl-nav-show.gif)

实现方案：采用element的el-menu组件设置自己的导航菜单
注意router属性为true即表示index值为路由跳转路径；

![img](./img/el-nav.png)

路由表基本配置：
```javascript
    //main.js启用vue-router
    import VueRouter from "vue-router";
    import router from "./router/index.js";

    new Vue({
        el: "#app",
        router,
        store,
        template: "<App></App>",
        components: { App }
        });
```
```javascript
    //配置基本路由信息router
    import yourViews from "../views/index"
    // ......

    export default new Router({
    routes: [
        {
        path: '/',
        name: "index",
        component: index,
                children: [
                {
                    path:"/children",
                    name:"children",
                    component:children
                }]
        },{
            path:'/error',
            name: 'error',
            component: code404
        },
        //一定要放到最后
            {
        path: "*",
        redirect: "/error"
        }]
    })
```
- ### 开发常用组件 
    - #### iconfont
    由于element-ui的icon不是很丰富，我们可以创建自己的icon库，会自己设计的当然最好了，不会的就可以借助一下第三方，比如Font Awesome或者阿里的[iconfont](http://iconfont.cn/)，都很强大~
    最后可以按照需要封装成组件，或者直接<i></i>标签的方式导入

    ![img](./img/icon.gif)

以阿里的iconfont为例，添加喜欢的图标为自己的项目，下载后修改css文件，最后在需要的地方引入css/js文件，全局或者单个vue组件引用都可以
```css
    [class^="cl-icon"],[class*="cl-icon"] {
            font-family: "iconfont" !important;
            font-size: 16px;
            font-style: normal;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
    }
```

- ### 根据功能需求完成具体页面
    - 富文本编辑器

    ![img](./img/editor.gif)

    - markdown编辑器

    ![img](./img/markdown.gif)

    - 代码编辑器

    ![img](./img/code.png)

    - todolist

    ![img](./img/todo.gif)

    - 上传文件

    ![img](./img/uploa.gif)
    
- ### 打包部署
关于跨域问题的解决：
- **cors** （Cross Origin Resource）
- 在 dev 开发模式下可以下使用**webpack 的 proxy
```config.js
    proxyTable: {
    '/list': {
        target: 'http://api.xxxxxxxx.com',
        changeOrigin: true,
        pathRewrite: {
        '^/list': '/list'
        }
    }
    }
```

```
    $ npm run build
```
编译之后发现项目目录下多出了dist文件夹，把里面的文件丢到服务器就ok了~