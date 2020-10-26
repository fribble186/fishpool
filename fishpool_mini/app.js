var userApi = require('./api/user.js')
var indexApi = require('./api/index.js')

App({
  onLaunch(options) {
    this.globalData = {
      version:"1.2",
      door:{
        showActivity:false,
        showDoor:false
      },
      system:{
        windowWidth:0,
        windowHeight:0
      },
      loginPromise:null,
      user:{
        nickName:'塘主',
        avaterUrl:''
      },
      token_string:'',
      get token(){
        return this.token_string
      },
      set token(value){
        console.log('set token',value,this.token_string)
        if (value != this.token_string){
          console.log('renew token')
          this.token_string = value
        }
      },
      setUserData : (data)=>{
        this.globalData.token = data.token
        this.globalData.nickName = data.nickName
        this.globalData.avaterUrl = data.avaterUrl
        my.setStorage({
          key: 'token',
          data: data.token
        })
        my.setStorage({
          key: 'nickName',
          data: data.nickName
        })
        my.setStorage({
          key: 'avaterUrl',
          data: data.avaterUrl
        })
      }
    }
    my.getSystemInfo({
      success: (res) => {
        this.globalData.system.windowWidth=res.windowWidth,
        this.globalData.system.windowHeight=res.windowHeight
        console.log(res)
      },
    });
    console.log('读取STORAGE')
    my.getStorage({
      key: 'token',
      success: (res) => {
        this.globalData.token = res.data
      }
    });
    my.getStorage({
      key: 'nickName',
      success: (res) => {
        this.globalData.user.nickName = res.data
      }
    });
    my.getStorage({
      key: 'avaterUrl',
      success: (res) => {
        this.globalData.user.avaterUrl = res.data
      }
    });
    this.globalData.loginPromise = (register)=>{
      if (register) return new Promise((resolve,reject)=>{
        if (!this.globalData.token)
          my.getAuthCode({
            scopes: 'auth_user', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
            success: (res) => {
              if (res.authCode) userApi.alogin(res.authCode).then(data=>{
                this.globalData.setUserData(data)
                resolve()
                }).catch(err=>reject(err))
            },
            fail:(err)=>reject(err)
          });
        else resolve()
      })
      else return new Promise((resolve,reject)=>{
        my.getAuthCode({
          scopes: 'auth_base', // 主动授权（弹框）：auth_user，静默授权（不弹框）：auth_base
          success: (res) => {
            if (res.authCode) userApi.alogin(res.authCode).then(data=>{
              if (data!=null) {
                this.globalData.setUserData(data)
                resolve()
              }
              else {
                my.clearStorage();
                this.globalData.token=null
                reject()
              }
            }).catch(err=>console.log("app.js"))
          }
        });
      })
    }
    this.globalData.indexPromise = ()=>{
      return indexApi.getApiConfig(this.globalData.version)
      .then(data=>{
        this.globalData.door.showDoor = data.data.showDoor
        this.globalData.door.showActivity = data.data.showActivity
      })
      .catch(err=>console.log(err))
    }
    this.globalData.loginPromise()
    .then(data=>console.log('app.js got token',data))
    .catch(err=>console.log(err))
  },
  onShow(options) {
    // 从后台被 scheme 重新打开
    // options.query == {number:1}
  },
});
