var request = require('../utils/request.js')
var config = require('../utils/config.js')
var DOMAIN = config.CONST.DOMAIN

module.exports={
  record(type,contents){
    let url = DOMAIN + 'record/record'
    let params = {
      app:'fishpool',
      type:type,
      contents:contents
    }
    return request.POST(url,params).then(data=>data)
  }
}