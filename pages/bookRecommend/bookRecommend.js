const win = require(("../../tools/win.js"))
Page({
  data: {
    courseList: [{
      img: 'https://dummyimage.com/206x206/3F51B5',
      courseName: '计算机科学与导论',
      author: '刘某某',
      publish: '嘉大出版社'
    }, {
      img: 'https://dummyimage.com/206x206/3F51B5',
      courseName: '计算机科学与导论',
      author: '刘某某',
      publish: '嘉大出版社'
    },
    {
      img: 'https://dummyimage.com/206x206/3F51B5',
      courseName: '计算机科学与导论',
      author: '刘某某',
      publish: '嘉大出版社'
    },
    {
      img: 'https://dummyimage.com/206x206/3F51B5',
      courseName: '计算机科学与导论',
      author: '刘某某',
      publish: '嘉大出版社'
    },
    {
      img: 'https://dummyimage.com/206x206/3F51B5',
      courseName: '计算机科学与导论',
      author: '刘某某',
      publish: '嘉大出版社'
    }]
  },
  onPullDownRefresh() {
    win.loading("加载中...");
    let data = [];
    let indx = +Math.random().toFixed(2);
    setTimeout(() => {
      for (let i = 0; i < 8; i++) {
        let dat = {
          img: 'https://dummyimage.com/206x206/3F51B5',
          courseName: '计算机科学与导论fdasfdsfdsssadsfadsafsdaf' + indx,
          author: '刘某某',
          publish: '嘉大出版社'
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
          img: 'https://dummyimage.com/206x206/3F51B5',
          courseName: '计算机科学与导论' + indx,
          author: '刘某某',
          publish: '嘉大出版社'
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