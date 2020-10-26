

Page({
  toDetail(){
    my.navigateTo({
      url:'/pages/bbs/detail/detail'
    });
  },
  toPost(){
    my.navigateTo({
      url:'/pages/bbs/bbs-post/bbs-post'
    });
  },
  toMe(){
    my.navigateTo({
      url:'/pages/bbs/list/list'
    });
  },
  onLoad(query) {
    my.hideShareMenu()
    // 页面加载
    // let randomMargin = []
    // for (let i = 0;i < 2;i++)
    //   randomMargin[i] = Math.floor(Math.random()*200+200)
    // this.setData({
    //   randomMargin:randomMargin
    // })
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
