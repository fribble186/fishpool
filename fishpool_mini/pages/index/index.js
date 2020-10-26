var app = getApp()

Page({
  data:{
    scenelist:[
      {title:"开始游览",ptype:"scene"},
      {title:"正片图鉴",ptype:"imgbook"},
      {title:"活动介绍",ptype:"activity"}],
    name:"鱼塘工作室",
    intro:"这是一个神奇的鱼塘，不光能租棚，老板还能兼职拍照，还能录舞，而且拍的还不错！棚里有猫~有狗~就是没养鱼~那它为什么叫鱼塘呢？大概老板是条闲鱼吧~【老板名字叫双鱼~】",
    doorContents:"欢迎QQ搜索“鱼塘工作室”订棚子\n\nB站搜索“鱼塘工作室”看宅舞视频\n\n微博搜索“鱼塘工作室”互动"
  },
  toastc(ref){
    this.toastc = ref
  },
  showToast(){
    console.log(this.toastc)
    this.toastc.setData({hideToast:false})
  },
  toPost:function(e){
    console.log(e)
    my.navigateTo({
      url:'/pages/post/list/list?ptype='+e.currentTarget.dataset.ptype
    })
  },
  toHole(){
    app.globalData.loginPromise(true)
      .then(()=>my.navigateTo({url:'./../bbs/bbs/bbs'}))
      .catch((err)=>my.alert({  title: err }))
  },
  onLoad(query) {
    // 页面加载
  },
  onReady() {
    // 页面加载完成
    app.globalData.indexPromise().then(()=>
      this.setData({
        showDoor:app.globalData.door.showDoor,
        showActivity:app.globalData.door.showActivity
      })
    )
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
  onShareAppMessage() {
    // 返回自定义分享信息
    return {
      title: '鱼塘',
      desc: '鱼塘工作室，一起来摸鱼！',
      path: 'pages/index/index',
    };
  },
});
