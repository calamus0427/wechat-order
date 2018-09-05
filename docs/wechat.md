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
- weui

## 优点
1.分类筛选和右侧菜单的滚动联动
2.排序规则图标的动态改变，排序可显示排序规则
3.一些提示更可爱
4.增加自定义icon，页面更好看
5.购物车的查看和下单提示

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

#### 菜单的排序

## 待优化
1.小程序端框架优化
2.增加定位自动获取
3.利用本地缓存
4.完善功能
5.增加购物车动画
6.配送时间的选择更多
