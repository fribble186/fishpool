var request = require('../utils/request.js')
var config = require('../utils/config.js')

var DOMAIN = config.CONST.DOMAIN

module.exports={
  getBBSList(offset){
    let url = DOMAIN + 'bbs/get_list/'
    let params = {
      offset:offset
    }
    return request.GET(url,params).then(data=>data)
  },
  getMyBBSList(offset){
    let url = DOMAIN + 'bbs/get_my_bbs/'
    let params = {
      offset:offset
    }
    return request.GET(url,params).then(data=>data)
  },
  getBBS(bid){
    let url = DOMAIN + 'bbs/get_bbs/'
    let params = {
      bid:bid
    }
    return request.GET(url,params).then(data=>data)
  },
  postbbs(contents,btype){
    let url = DOMAIN + 'bbs/post_bbs/'
    let params = {
      contents:contents,
      btype:btype
    }
    return request.POST(url,params).then(data=>data)
  },
  getRandombbs(){
    let url = DOMAIN + 'bbs/random_bbs/'
    let params = {}
    return request.GET(url,params).then(data=>data)
  },
  postbcomment(contents,bbsid){
    let url = DOMAIN + 'bbs/post_bcomment/'
    let params = {
      contents:contents,
      bbsid:bbsid
    }
    return request.POST(url,params).then(data=>data)
  }
}