var request = require('../utils/request.js')
var config = require('../utils/config.js')
var DOMAIN = config.CONST.DOMAIN

module.exports={
  alogin(authCode){
    let url = DOMAIN + 'user/alogin/'
    let params = {
      authCode:authCode
    }
    return request.POST(url,params).then(data=>data)
  }
}