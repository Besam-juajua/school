Page({
  data: {
    time: '周二课程内容',
    courseList: [{
      img: 'https://dummyimage.com/206x206/E3EAE9',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      date: '上午一二节'
    }, {
      img: 'https://dummyimage.com/206x206/E3EAE9',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      date: '上午三四节'
    },
    {
      img: 'https://dummyimage.com/206x206/E3EAE9',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      date: '下午一二节'
    },
    {
      img: 'https://dummyimage.com/206x206/E3EAE9',
      courseName: '计算机科学与导论',
      teacher: '刘某某',
      date: '下午一二三节'
    }]
  },
  onLoad(options) {
    let word = '五';
    switch(options.id) {
      case '1': word = '一'; break;
      case '2': word = '二'; break;
      case '3': word = '三'; break;
      case '4': word = '四'; break;
      default: 
    }
    this.setData({
      time: "周" + word + "课程内容"
    })
  }
})