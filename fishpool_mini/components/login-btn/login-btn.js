var app = getApp()
var userApi = require('../../api/user.js')
Component({
  data: {},
  props: {
    onLogin:(data)=>console.log(data)
  },
  didMount(){
  },
  didUpdate(){},
  didUnmount(){},
  methods: {
    click:function(e){
      console.log("login-btn")
      if (!app.globalData.token)
        my.getAuthCode({
          scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
          success: (res) => {
            if (res.authCode) userApi.alogin(res.authCode).then(data=>{
              app.globalData.setUserData(data)
              })
          }
        });
      this.props.onLogin()
    }
  },
})
