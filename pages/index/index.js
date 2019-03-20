const app = getApp();
Page({
  data: {
    swiperList: [
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A",
      "https://dummyimage.com/357x189/8BC34A"
    ]
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
  onShow(options) {
  }
})