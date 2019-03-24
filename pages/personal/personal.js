const login = require('../../tools/login.js')
const app = getApp();
Page({
  data: {
    profile: {
      img: 'https://dummyimage.com/232x232/bbb/bbb',
      nickName: '这是微信昵称'
    },
    identifyList: [{
      icon1: '../../images/person.png',
      text: '个人信息'
    }, {
      icon1: '../../images/identification.png',
      text: '学生认证'
    }, {
        icon1: '../../images/my_syllabus.png',
      text: '我的课程'
    }],
    _needLogin: false
  },
  onShow() {
    if (!app.globalData.userInfo) {
      login.needLogin(this, this.onShow)
      // this.onShow()
    };
    this.setData({
      _needLogin: !app.globalData.userInfo
    });
    let _self = this;
    wx.getStorage({
      key: 'userInfo',
      success: function(res) {
        _self.setData({
          profile: {
            img: res.data.avatarUrl,
            nickName: res.data.nickName
          }
        })
      },
    })
  },
  to(e) {
    let goPage = e.target.dataset.index;
    if(goPage == 0) {
      wx.navigateTo({
        url: '../personalData/personalData',
      })
    } else if(goPage == 1) {
      wx.navigateTo({
        url: '../identification/identification',
      })
    } else {
      wx.navigateTo({
        url: '../syllabus/syllabus',
      })
    }
  }
})