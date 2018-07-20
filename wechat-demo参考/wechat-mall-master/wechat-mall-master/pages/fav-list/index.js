//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
  },

  toDetailsTap: function (e) {
    wx.navigateTo({
      url: "/pages/goods-details/index?id=" + e.currentTarget.dataset.id
    })
  },
  home: function () {
    wx.switchTab({
      url: "/pages/index/index"
    })
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/fav/list',
      data: {
        token: app.globalData.token
      },
      success: function (res) {
        if (res.data.code == 0) {
          that.setData({
            favList: res.data.data
          });
        } else if (res.data.code == 404) {
          that.setData({
            favList: null
          });
        }
      }
    })
  },
  fav: function (e) {
    var that = this;
    wx.request({
      url: 'https://api.it120.cc/' + app.globalData.subDomain + '/shop/goods/fav/delete',
      data: {
        token: app.globalData.token,
        goodsId: e.currentTarget.dataset.id
      },
      success: function (res) {
        if (res.data.code == 0) {
          wx.showModal({
            title: '提示',
            content: '已经取消收藏',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: "index"
                })
              }
            }
          })
        }
      }
    })
  }


  
})