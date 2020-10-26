var bbsApi = require('../../../api/bbs.js')
var offset = 0
var MORE = true
Page({
  toDetail(e){
    console.log(e)
    my.navigateTo({
      url:'/pages/bbs/detail/detail?id='+e.currentTarget.dataset.id
    });
  },
  postBBS:function(){
    my.navigateTo({
      url:'/pages/bbs/bbs-post/bbs-post'
    });
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
    console.log("show")
    offset = 0
    MORE = true
    // bbsApi.getBBSList(offset).then(data=>{
    //   this.setData({data:data.data})
    //   offset+=5
    //   })
    bbsApi.getMyBBSList(offset).then(data=>{
      this.setData({data:data.data})
      offset+=5
      })
      
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
    if (MORE) {
      bbsApi.getMyBBSList(offset).then(data=>{
        if (data.data.length<5) MORE=false
        this.setData({data:this.data.data.concat(data.data)})
        offset+=5
        })
    }
    else my.showToast({
      content:'没有更多了',
      duration:1000
    })
  },

});
