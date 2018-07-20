//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
  },
  
  home: function () {
    wx.switchTab({
      url: '../index/index'
    })
  },
  onLoad: function () {
    var that = this;
    app.getUserInfo(function (userInfo) {
      that.setData({
        userInfo: userInfo
      })
    }),
    wx.getStorage({
      key: 'bgImage',
      success: function (res) {
        that.setData({
          bgImage: res.data
        })
      }
    }),
    setTimeout(function () {
      wx.switchTab({
        url: '../index/index'
      })
    }, 3000
    )
  }
});