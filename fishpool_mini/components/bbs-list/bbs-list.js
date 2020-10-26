var app = getApp()
var bbsApi = require('../../api/bbs.js')
Component({
  data: {
  },
  props: {
    data:{}
  },
  didMount(){
  },
  didUpdate(){
    console.log(this.props.data)
  },
  didUnmount(){},
  methods: {
    // toBBSDetail:function(e){
    //   console.log(e.currentTarget.dataset.id)
    //   my.navigateTo({
    //     url:'/pages/post/post/post?id='+e.currentTarget.dataset.id
    //   });
    // },
    postBBS:function(){
      my.navigateTo({
        url:'/pages/bbs/bbs-post/bbs-post'
      });
    }
  },
})
