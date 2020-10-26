var request = require('../utils/request.js')
var config = require('../utils/config.js')
var DOMAIN = config.CONST.DOMAIN

module.exports={
  getPostList(ptype){
    let url = DOMAIN + 'post/get_list/'
    let params = {
      ptype : ptype
    }
    return request.GET(url,params).then(data=>data)
  },
  getPost(id){
    let url = DOMAIN + 'post/get_post/'
    let params = {
      id : id
    }
    return request.GET(url,params).then(data=>data)
  }
}