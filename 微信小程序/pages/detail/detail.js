//index.js
//获取应用实例
const app = getApp()
var id

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  back(){
    qq.navigateBack()
  },
  onLoad: function (e) {
    id = e.id
    let img = []
    let index
    let num
    let title
    switch (e.id){
      case "0":
        title='和风景'
        index='c'
        num=5
        break;
      case "1":
        title='粉色房间'
        index='b'
        num=5
        break;
      case "2":
        title='厨房景'
        index='d'
        num=4
        break;
      case "3":
        title='教堂景'
        index='e'
        num=4
        break;
      case "4":
        title='卧室景'
        index='g'
        num=3
        break;
      case "5":
        title='客厅景'
        index='i'
        num=4
        break;
      case "6":
        title='绿幕白棚及其它'
        index='h'
        num=3
        break;
      case "7":
        title='外景'
        index='a'
        num=17
        break;
      case "8":
        title='欧式白棚'
        index='f'
        num=3
        break;
    }
    for (let i=1;i<=num;i++)
      img.push('https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/'+index+'/'+i+'.jpg')
    this.setData({img,title})
    qq.setNavigationBarTitle({title})
  },

  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快来了解一下这个'+this.data.title+'!',
      path: '/pages/detail/detail?id='+id
    }
  }
})
