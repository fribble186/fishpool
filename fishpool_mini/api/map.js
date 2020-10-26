var request = require('/utils/request.js')
var config = require('/utils/config.js')
var DOMAIN = config.CONST.DOMAIN

module.exports={
  getRoute(pattern,fromLoc,toLoc){
    let url = DOMAIN + 'map/'
    let params = {
      pattern : pattern,
      fromLoc : fromLoc,
      toLoc : toLoc
    }
    return request.GET(url,params).then(data=>data)
  }
}