const win = require("../../tools/win.js")
const login = require('../../tools/login.js')
const app = getApp();
Page({
  data: {
    noteList: [
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下',
      '我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下'
    ],
    editing: false,
    editContent: '',
    nowEditor: '',
    _needLogin: false
  },
  onShow() {
    if (!app.globalData.userInfo) {
      login.needLogin(this)
    }
    this.setData({
      _needLogin: !app.globalData.userInfo
    })
  },
  toEdit(e) {
    let target = e.target.dataset.id;
    this.setData({
      editContent: this.data.noteList[+target],
      editing: true
    })
  },
  goBack() {
    this.setData({
      editing: false
    })
  },
  onPullDownRefresh() {
    win.loading("加载中...");
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(()=> {
      for (let i = 0; i < 9; i++) {
        let str = "我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下" + indx;
        data.push(str);
      }
      this.setData({
        noteList: data
      })
      win.toast('加载完成', 'success', 800)
      wx.stopPullDownRefresh();
    }, 1000)
    
  },
  onReachBottom() {
    win.loading("加载中...");
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(()=> {
      for (let i = 0; i < 9; i++) {
        let str = "我就是简单的记录了一下我就是简单的记录了一下我就是简单的记录了一下" + indx;
        data.push(str);
      }
      this.setData({
        noteList: this.data.noteList.concat(data)
      })
      win.toast('加载完成', 'success', 800)
    }, 1000)
    
  }
})