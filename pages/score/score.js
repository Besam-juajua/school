Page({
  data: {
    courseList: [{
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }, {
      courseName: '计算机科学与技术 (2学分)',
      score: '95.5'
    }],
    currentTerm: '2017~2018第一学期',
    showBox: false
  },
  toShowBox() {
    this.setData({
      showBox: true
    })
  },
  toHideBox(e){
    let type = e.target.dataset.type;
    if(type == 'alertBox') {
      this.setData({
        showBox: false
      })
      return
    }
    this.setData({
      currentTerm: e._relatedInfo.anchorTargetText,
      showBox: false
    })
  }
})