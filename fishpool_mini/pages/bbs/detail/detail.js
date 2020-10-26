var bbsApi = require('../../../api/bbs.js')
var contents = ""
Page({
  data:{
    inputvalue:""
  },
  bindinput(e){
    console.log(e.detail.value)
    if (e.detail.value==""){
      this.setData({sendBtnClass:'sendbutton0',inputvalue:e.detail.value})
      contents=""
    }
    else{
      this.setData({sendBtnClass:'sendbutton1',inputvalue:e.detail.value})
      contents = e.detail.value
    } 
  },
  sendComment(e){
    if (contents!="")
      bbsApi.postbcomment(contents,this.data.data.id).then(data=>this.setData({data:data.data,inputvalue:""}))
    else
      my.alert({
      title: '咸鱼',
      content: '是不是忘记填内容了？'
    });
  },
  onLoad(query) {
    my.hideShareMenu()
    // 页面加载
    console.log(query.id)
    if (query.id==undefined)
      bbsApi.getRandombbs().then(data=>this.setData({data:data.data}))
    else
      bbsApi.getBBS(query.id).then(data=>this.setData({data:data.data}))
    this.setData({
      sendBtnClass:'sendbutton0'
    })
  },
  onReady() {
    // 页面加载完成
  },
  onShow() {
    // 页面显示
  },
  onHide() {
    // 页面隐藏
  },
  onUnload() {
    // 页面被关闭
  },
  onTitleClick() {
    // 标题被点击
  },
  onPullDownRefresh() {
    // 页面被下拉
  },
  onReachBottom() {
    // 页面被拉到底部
  },

});
