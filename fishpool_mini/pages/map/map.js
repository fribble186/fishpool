var app = getApp()
var toLoc = {latitude:31.40748,longitude:121.363319}
var mapApi = require('../../api/map.js')

Page({
  data:{
    markers: [
    {
      iconPath: "/img/logo.jpg",
      id: 1,
      latitude: toLoc.latitude,
      longitude: toLoc.longitude,
      width: 30,
      height: 30,
      iconAppendStr: '鱼塘工作室'
    },
    {
      iconPath: "/img/heart.png",
      id: 1,
      latitude: toLoc.latitude,
      longitude: toLoc.longitude,
      width: 30,
      height: 30,
      iconAppendStr: '我的位置'
    }]
  },
  onLoad(query) {
    // 页面加载
  },
  onReady() {
    // 页面加载完成
    this.setData({
      mapHeight:app.globalData.system.windowHeight,
      mapWidth:app.globalData.system.windowWidth,
      mapsetting:{
        // 手势
        gestureEnable: 1,
        // 比例尺
        showScale: 1,
        // 指南针
        showCompass: 1,
        //双手下滑
        tiltGesturesEnabled: 1,
        // 交通路况展示
        trafficEnabled: 0,
        // 地图 POI 信息
        showMapText: 0
      }
    })
  },
  onShow() {
    // 页面显示
    var _this = this
    var markers = this.data.markers
    setInterval(
      my.getLocation({
      success(res){
        markers[1].latitude = res.latitude
        markers[1].longitude = res.longitude
        let _toLoc = toLoc.latitude+","+toLoc.longitude
        let fromLoc = res.latitude+","+res.longitude
        mapApi.getRoute("walking",_toLoc,fromLoc).then(data=>{
          console.log(data)
          var polyline = [{"points":data.result.routes[0].points, "color": "#FF0000DD", "width": 5, "dottedLine": false}]
          _this.setData({
            longitude:res.longitude,
            latitude:res.latitude,
            markers,
            polyline
          })
        })
        console.log(markers)
        console.log(res)
      },
      fail(res){
        my.showToast({
        type: 'fail ',
        content: '未能获取位置信息，检查一下设置哦',
        duration: 3000,
        success: () => {},
      });
      }
    })
      ,5000)
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
