//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: qq.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {
    var imgUrls = [
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/1.jpg',
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/2.jpg',
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/3.jpg',
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/4.jpg',
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/5.jpg',
      'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/6.jpg',
    ]
    this.setData({
      imgUrls
    })
  },
  goto(e) {
    console.log(e.currentTarget.dataset.page)
    switch (e.currentTarget.dataset.page){
      case "1":
        qq.navigateTo({url:'../cal/cal'})
        break;
      case "2":
        qq.navigateTo({url:'../rooms/rooms'})
        break;
      case "3":
        qq.navigateTo({url:'../rental/rental'})
        break;
      case "4":
        qq.navigateTo({url:'../intro/intro'})
        break;
    }
  },
  onShareAppMessage(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '快了解一下炒好看的魔都棚子',
      path: '/pages/index/index',
      imageUrl: '/img/share.jpg'
    }
  }
})
