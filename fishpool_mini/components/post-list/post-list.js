var app = getApp()
Component({
  data: {},
  props: {
    data:{}
  },
  didMount(){},
  didUpdate(){
    console.log(this.props.data)
  },
  didUnmount(){},
  methods: {
    toPostDetail:function(e){
      console.log(e.currentTarget.dataset.id)
      my.navigateTo({
        url:'/pages/post/post/post?id='+e.currentTarget.dataset.id
      });
    }
  },
})
