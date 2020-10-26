var postApi = require('../../../api/post.js')
var app = getApp()
var imageLoadCounter = 0
Page({
  onLoad(query) {
    // 页面加载
    var ptype = query.ptype
    // var ptype = "scene"
    this.setData({ptype:ptype,currentId:0})
    this.setData({
      containerHeight:app.globalData.system.windowHeight*0.8,
      containerWidth:app.globalData.system.windowWidth-20
    })
    postApi.getPostList(ptype).then(data=>this.setData({data:data.data}))
  },
  toPostDetail:function(e){
    console.log(e.currentTarget.dataset.id)
    my.navigateTo({
      url:'/pages/post/post/post?id='+e.currentTarget.dataset.id
    });
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
  }
});
