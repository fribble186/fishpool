//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    rooms:[
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/1.jpg',text:'和风景',
info:'竹径通幽处，日式和风外景（里面还有面超灵的许愿墙，不来试试吗）'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/2.jpg',text:'粉色房间',
info:'粉色少女心，公主必备'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/3.jpg',text:'厨房景',
info:'生活日常景，魔都少有的哦'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/4.jpg',text:'教堂景',
info:'神圣的教堂，你值得拥有'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/5.jpg',text:'卧室景',
info:'御宅景，想在里面待一辈子！'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/6.jpg',text:'客厅景',
info:'日常可以拍，民宿风'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/7.jpg',text:'绿幕白棚及其它',
info:'专业景'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/8.jpg',text:'外景',
info:'外景也能拍拍拍，日常，撸舞都可以！'},
      {img:'https://xxx-1256197921.cos.ap-shanghai.myqcloud.com/material/swiper/9.jpg',text:'欧式白棚',
info:'背景干净，拍照一定要打卡的景！'}
    ]
  },
  onLoad: function () {
  },
  back(){
    qq.navigateBack()
  },
  toDetail(e){
    qq.navigateTo({url:'../detail/detail?id='+e.currentTarget.dataset.id})
  }
})
