var app = getApp()
var bbsApi = require('../../../api/bbs.js')
var contents = ""
Page({
  data:{
    curId:1,
    curBtype:['','吐槽','表白','扩列'],
  },
  bindinput(e){
    contents = e.detail.value
  },
  bindBBSSubmit:function(e){
    var btype = this.data.curId
    if (contents!= null && contents!="" && contents) bbsApi.postbbs(contents,btype).then(data=>my.navigateBack())
  },
  selectType:function(e){
    var id=e.currentTarget.dataset.id
    this.setData({curId:id})
  },
  onLoad(query) {
    my.hideShareMenu()
    // 页面加载
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
