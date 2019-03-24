const win = require('../../tools/win.js')
Page({
  data: {
    courseList: [{
      img: 'https://dummyimage.com/206x206/FF9800',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      score: '2学分',
      date: '每周二晚上'
    }, {
      img: 'https://dummyimage.com/206x206/FF9800',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      score: '2学分',
      date: '每周二晚上'
    },
    {
      img: 'https://dummyimage.com/206x206/FF9800',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      score: '2学分',
      date: '每周二晚上'
    },
    {
      img: 'https://dummyimage.com/206x206/FF9800',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      score: '2学分',
      date: '每周二晚上'
    }]
  },
  goBack() {
    wx.navigateBack({
      
    })
  },
  onPullDownRefresh() {
    win.loading("加载中...");
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        let dat = {
          img: 'https://dummyimage.com/206x206/FF9800',
          courseName: '计算机科学与导论' + indx,
          teacher: '刘某某',
          score: '2学分',
          date: '每周二晚上'
        }
        data.push(dat);
      }
      this.setData({
        courseList: data
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
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        let dat = {
          img: 'https://dummyimage.com/206x206/FF9800',
          courseName: '计算机科学与导论' + indx,
          teacher: '刘某某',
          score: '2学分',
          date: '每周二晚上'
        }
        data.push(dat);
      }
      this.setData({
        courseList: this.data.courseList.concat(data)
      })
      // win.hideLoading();
      win.toast('加载完成', 'success', 800)
    }, 1000)
  }
})