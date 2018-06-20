//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '欢迎来到种花吧',
    //userInfo: {},
    //hasUserInfo: false,
    //canIUse: wx.canIUse('button.open-type.getUserInfo'),
    perMonthCost: 5000,
    timeToLive: 30,
    cpi: 6,
    totalCost: 4340567

  },
  onLoad: function () {
    /*
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
   */
  },
  /*getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },*/
  retiredPlan: function () {
    var perYear = 0
    var sum = 0
    var _timeToLive = this.data.timeToLive
    var _cpi = 1 + this.data.cpi / 100
    var _perYearCost = this.data.perMonthCost * 12

    var preYear = _timeToLive / 3
    var postYear = _timeToLive * 2 / 3
    for (var i = 0; i < _timeToLive; i++) {
      perYear = _perYearCost * Math.pow(_cpi, i)
      if (i > preYear && i <= postYear) {
        perYear = perYear * 1.2
      }
      if (i > postYear) {
        perYear = perYear * 0.7
      }
      sum = sum + Math.round(perYear)
    }
    this.setData({
      totalCost: sum
    })
  },
  setPerMonthCost: function (e) {
    this.setData({
      perMonthCost: e.detail.value,
    })
    this.retiredPlan()
  },
  setCpi: function (e) {
    this.setData({
      cpi: e.detail.value
    })
    this.retiredPlan()
  },
  setTimeToLive: function (e) {
    this.setData({
      timeToLive: e.detail.value
    })
    this.retiredPlan()
  }


})
