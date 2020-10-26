//index.js
//获取应用实例
const app = getApp()
var pepole = 0
var hour = 0
var scene = ""
var week = "weekend"

Page({
  data: {
    array: ['无影墙', '绿幕', '卧室', '教堂', '欧式白棚', '厨房', '客厅', '粉色空间', '和风庭院'],
     items: [
      { name: 'weekday', value: '工作日' },
      { name: 'weekend', value: '节假日及双休日', checked: 'true' },
    ]
  },
  onLoad: function () {
  },
  back(){
    qq.navigateBack()
  },
  pepole(e){
    pepole = e.detail.value
  },
  hour(e){
    hour = e.detail.value
  },
  bindPickerChange(e){
    scene = e.detail.value
    this.setData({index: e.detail.value})
  },
  radioChange(e){
    week = e.detail.value
  },
  cal(){
    if ( pepole == 0 || pepole == "0"){
      qq.showToast({
        title:'请输入人数',
        icon: "none"
      })
      return
    }
    if ( hour == 0 || hour == "0"){
      qq.showToast({
        title:'请输入小时数',
        icon: "none"
      })
      return
    }
    if ( !scene || scene == "") {
      qq.showToast({
        title:'请选择棚景',
        icon: "none"
      })
      return
    }
    pepole =  Number(pepole)
    hour = Number(hour)
    let result
    if (this.data.index in {'0':'','1':'','3':''}){
      if (week == 'weekday') {
        if (hour==1) result = 150
        else if (hour==2 || hour==3) result = 120*hour
        else if (hour>=4 || hour<=7) result = 100*hour
        else result = 699
      }
      else {
        if (hour==1) result = 180
        else if (hour==2 || hour==3) result = 150*hour
        else if (hour>=4 || hour<=7) result = 120*hour
        else result = 888
      }
      if (pepole > 6) result = result + (pepole-6)*10*hour
    }
    else {
      if (week == 'weekday') {
        if (hour==1) result = 130
        else if (hour==2 || hour==3) result = 100*hour
        else if (hour>=4 || hour<=7) result = 90*hour
        else result = 620
      }
      else {
        if (hour==1) result = 150
        else if (hour==2 || hour==3) result = 120*hour
        else if (hour>=4 || hour<=7) result = 110*hour
        else result = 730
      }
      if (this.data.index == '6'){
        if (pepole > 4) result = result + (pepole-6)*10*hour
      }
      else {
        if (pepole > 6) result = result + (pepole-6)*10*hour
      }
    }
    this.setData({result})
  }
})
