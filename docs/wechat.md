## 项目演示
![img](http://pbsp6zdxi.bkt.clouddn.com/wechat.gif)
#### 部分页面截图
![img](./img/wechat1.png)
![img](./img/wechat2.png)
![img](./img/wechat3.png)
![img](./img/wechat4.png)
![img](./img/wechat5.png)
![img](./img/wechat6.png)
![img](./img/wechat33.png)

## 技术栈
- 小程序原生api
- wepy
- wepy-redux
- weui

## 优点
 1. 左侧分类筛选和右侧菜单的滚动联动
 2. 菜品的搜索效果优化
 3. 排序规则图标的动态改变，排序可显示排序规则
 4. 一些提示更友好:配送价格不满足起送价时的提示
 5. 增加自定义icon，页面更美观
 6. 购物车按照单品和套餐分类显示菜品

## 开发遇到的问题
#### 内切角的实现
```css
.order-price{
  padding:10px;
  text-align:right;
  position:relative;
}
.order-price::before {
            content: '';
            position: absolute;
            width: 16px;
            height: 16px;
            border-radius: 50%;
            background-color: #efeff4;
            top: -8px;
            left: -8px;
        }
        
  .order-price::after {
      content: '';
      position: absolute;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #efeff4;
      top: -8px;
      right: -8px;
  }
```

#### 路由携带参数
```javascript
//传递参数
          var message = JSON.stringify(this.message)
 wx.navigateTo({
              url: "/pages/submit?message=" + message 
          })
```
```javascript
//参数接受
        this.message = JSON.parse(options.message);
```

此处打算优化为redux缓存的模式，时间问题还没有做完。



## 待优化
1.小程序端框架优化
2.增加定位自动获取
3.利用本地缓存
4.完善功能
5.增加购物车动画
6.配送时间的选择更多
