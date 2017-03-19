//引入express
var express = require('express');

//express()
var app = express();

//allow custom header and CORS
// app.all('*',function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
//   res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
//   res.header("Content-Type", "application/json;charset=utf-8"); 

//   if (req.method == 'OPTIONS') {
//     res.send(200); //让options请求快速返回
//   } else {
//     next();
//   }
// });

//get()
app.get('*',function(req,res){

	res.sendFile(__dirname + req.url);

})

//listen()
app.listen('3000',function(error){
	if (error) {
		console.log(error);
	} else {
		console.log('服务器开启成功');
	}
})