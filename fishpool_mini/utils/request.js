function request(method,url,data){
  var app = getApp()
  try {
    var token = app.globalData.token
  }catch(e){
    var token = null
  }
	return new Promise((resolve,reject)=>{
		my.request({
      url:url,
      method:method,
      data:data,
      headers:{
        'content-type': 'application/x-www-form-urlencoded',
        'Authorization': token?'Token ' + token:'',
      },
      success:function(res){
        resolve(res.data)
      },
      fail:function(res){
        reject(res)
      }
    })
	})
}
function GET(url,data){
  return request('GET',url,data)
}
function POST(url,data){
  return request('POST',url,data)
}
function PUT(url,data){
  return request('PUT',url,data)
}
function DELETE(url,data){
  return request('DELETE',url,data)
}
module.exports = {
	request:request,
	GET:GET,
	POST,POST,
	PUT,PUT,
	DELETE,DELETE
}