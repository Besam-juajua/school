const win = require('../../tools/win.js')
const login = require('../../tools/login.js')
const app = getApp();
Page({
  data: {
    swiperList: [
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A"
    ],
    _needLogin: false
  },
  toSelectCoursePage() {
    wx.navigateTo({
      url: '../selectCourse/selectCourse'
    })
  },
  toSyllabusPage() {
    wx.navigateTo({
      url: '../syllabus/syllabus'
    })
  },
  toScorePage() {
    wx.navigateTo({
      url: '../score/score'
    })
  },
  toRecommendPage() {
    wx.navigateTo({
      url: '../bookRecommend/bookRecommend'
    })
  },
  onShow() {
    if (!app.globalData.userInfo) {
      login.needLogin(this)
    }
    this.setData({
      _needLogin: !app.globalData.userInfo
    })
  }
})