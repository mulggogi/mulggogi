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
//app.listen(52273,function(){
//	console.log('server running at http://127.0.0.1:52273');
//});

app.listen(process.env.PORT || 52273, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});

//라우트를 수행합니다.
app.get('/', function(request,response){
	//파일을 읽습니다.
	fs.readFile('list.html','utf8',function(error,data){
	//데이터베이스 쿼리를 수행합니다.
	connection.query('SELECT * FROM Files order by fino desc limit 60', function(error,results){
	//응답합니다.
		response.send(ejs.render(data, {
			data: results
			}));
		});
	});
});

app.get('/img', function (request, response) {
    fs.readFile('1.jpg', function (error, data) {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(data);
    });
});