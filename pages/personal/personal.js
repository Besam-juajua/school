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
    }]
  },
  to(e) {
    let goPage = e.target.dataset.index;
    console.log(goPage)
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