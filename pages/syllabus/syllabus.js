Page({
  data: {

  },
  toCourseContentPage(e) {
    wx.navigateTo({
      url: '../courseContent/courseContent?id='+e.target.dataset.id
    })
  }
})