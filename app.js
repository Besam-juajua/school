//app.js
const win = require('./tools/win.js')
App({
  onLaunch() {
    // 登录
    wx.login({
      success: res => {
        console.log(res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    this.globalData.userInfo = wx.getStorageSync('userInfo')
  },
    
  globalData: {    
    userInfo: null
  }
})