var app = getApp()
var userApi = require('../../api/user.js')
Component({
  data: {
    hideToast:true
  },
  props: {},
  deriveDataFromProps(nextProps){
    console.log(nextProps)
  },
  didMount(){
  },
  didUpdate(){},
  didUnmount(){},
  methods: {
    none(){console.log("123")},
    tapHide(){
      this.setData({hideToast:true})
    }
  },
})
