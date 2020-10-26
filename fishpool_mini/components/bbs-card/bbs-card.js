
Component({
  data: {},
  props: {
    data:{},
    showComment:true
  },
  didMount(){
    console.log("bbs-card mount")
  },
  didUpdate(){
    console.log(this.props.data)
  },
  didUnmount(){},
  methods: {

  },
})
