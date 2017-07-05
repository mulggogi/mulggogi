var fs = require('fs');
var ejs = require('ejs');
var mysql = require('mysql');
var express = require('express');
var bodyParser = require('body-parser');


//데이터베이스와 연동합니다.
var connection = mysql.createConnection({                           
  		host: 'localhost',
 		port:3306,
  		user:'mulggogi',
  		password:'welcome9',
  		database:'afreecatv'
	});


//서버를 생성합니다.
var app = express();
app.use(bodyParser.urlencoded({
	extended: false
}));


//서버를 실행합니다.
app.listen(52273,function(){
	console.log('server running at http://127.0.0.1:52273');
});

//라우트를 수행합니다.
app.get('/', function(request,response){
	//파일을 읽습니다.
	fs.readFile('list.html','utf8',function(error,data){
	//데이터베이스 쿼리를 수행합니다.
	connection.query('SELECT * FROM Files', function(error,results){
	//응답합니다.
		response.send(ejs.render(data, {
			data: results
			}));
		});
	});
});


//라우트를 수행합니다.
//app.get('/', function(request,response){
//	var ino = request.params.ino;
//	//파일을 읽습니다.
//	fs.readFile('list.html','utf8',function(error,data){
//	//데이터베이스 쿼리를 수행합니다.
//	connection.query('SELECT * FROM Files where ino = ?',[ino], function(error,results){
//	//응답합니다.
//		response.send(ejs.render(data, {
//			data: results
//			}));
//		});
//	});
//});