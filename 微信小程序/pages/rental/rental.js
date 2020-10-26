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
  back(){
    qq.navigateBack()
  },
  onLoad: function () {
  }
})
