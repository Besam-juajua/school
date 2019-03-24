Page({
  data: {
    profile: {
      img: 'https://dummyimage.com/232x232/bbb/bbb',
      nickName: '这是微信昵称'
    },
    identify: {
      name: '刘嘉文',
      num: '131110191',
      content: '2013年9月'
    }
  },
  onShow() {
    var _self = this;
    wx.getStorage({
      key: 'userInfo',
      success: function (res) {
        _self.setData({
          profile: {
            img: res.data.avatarUrl,
            nickName: res.data.nickName
          }
        })
      },
    })
  }
})