//app.js
App({
  onLaunch: function () {
    // 登录
    qq.login({
      success: res => {
        console.log('login', res)
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    qq.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          qq.getUserInfo({
            success: res => {
              this.globalData.userInfo = res.userInfo
              console.log('hhh', res)
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
