var request = require('/utils/request.js')
var config = require('/utils/config.js')
var DOMAIN = config.CONST.DOMAIN

module.exports={
  getApiConfig(version){
    let url = DOMAIN + 'index/getApiConfig/'
    let params = {
      version : version
    }
    return request.GET(url,params).then(data=>data)
  }
}
