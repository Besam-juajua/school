const win = require("../../tools/win.js")
const login = require('../../tools/login.js')
const app = getApp();
Page({
  data: {
    messageList: [{
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }, {
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }, {
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }, {
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }, {
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }, {
      title: '关于公选课程已经开选的通知',
      content: '我就是随便写一下，看看这里面有什么内容',
      date: '2019.3.14 15：30'
    }],
    messagePage: 1,
    _needLogin: ''
  },
  onShow() {
    if (!app.globalData.userInfo) {
      login.needLogin(this)
    }
    this.setData({
      _needLogin: !app.globalData.userInfo
    })
  },
  onPullDownRefresh() {
    win.loading("加载中...");
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(()=> {
      for (let i = 0; i < 8; i++) {
        let dat = {
          title: "关于公选课程已经开选的通知" + indx,
          content: '我就是随便写一下，看看这里面有什么内容',
          date: '2019.3.14 15：30'
        }
        data.push(dat);
      }
      this.setData({
        messageList: data
      })
      // win.hideLoading();
      win.toast('加载完成', 'success', 800)
      wx.stopPullDownRefresh();
    }, 1000)
  },
  onReachBottom() {
    win.loading('加载中...');
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(()=> {
      for (let i = 0; i < 8; i++) {
        let dat = {
          title: "关于公选课程已经开选的通知" + indx,
          content: '我就是随便写一下，看看这里面有什么内容',
          date: '2019.3.14 15：30'
        }
        data.push(dat);
      }
      this.setData({
        messageList: this.data.messageList.concat(data)
      })
      // win.hideLoading();
      win.toast('加载完成', 'success', 800)
    }, 1000)
  }
})