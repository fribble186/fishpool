var app = getApp()
Component({
  data: {},
  props: {
    data:{}
  },
  didMount(){},
  didUpdate(){},
  didUnmount(){},
  methods: {
    toMap(){
      app.globalData.loginPromise(true)
      .then(()=>my.navigateTo({url:'/pages/map/map'}))
      .catch((err)=>my.alert({  title: err }))
    }
  },
})
