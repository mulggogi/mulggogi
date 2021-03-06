﻿var fs = require('fs');
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
app.listen(52274,function(){
	console.log('server running at http://127.0.0.1:52274');
});

//라우트를 수행합니다.
app.get('/', function(request,response){
	//파일을 읽습니다.
	fs.readFile('list2.html','utf8',function(error,data){
	//데이터베이스 쿼리를 수행합니다.
	connection.query('SELECT * FROM Files2 order by fino asc', function(error,results){
	//응답합니다.
		response.send(ejs.render(data, {
			data: results
			}));
		});
	});
});

app.get('/img', function (request, response) {
    fs.readFile('2.jpg', function (error, data) {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end(data);
    });
});

for(var i=0;i<20;i++){
app.get('/select', function(request,response){
	var fiword = request.params.word1[0];
	//파일을 읽습니다.
	fs.readFile('list_file2.html','utf8',function(error,data){
	//데이터베이스 쿼리를 수행합니다.
	connection.query('SELECT ffile FROM Files2 where fino=? order by fino asc',[fiword], function(error,results){
	//응답합니다.
		response.send(ejs.render(data, {
			data: results
			}));
		});
	});
});
}

var word = 24911916;

function foo() {
  console.log(Date());
  setTimeout(foo, 300);

var str1 = "\n";
var str2 = "\t";

var i = 0;

console.log(str1);
console.log("Crolling ver 2.0");
console.log("현재 파일번호");
console.log(word);

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?&nRowNum=30&nTitleNo=';

	var array_flag = [];

	var array_bj_id = [];
	var array_bj_logo = [];
	var array_nickname = [];
	var array_title = [];
	var array_titleImage = [];
	var array_key = [];
	var array_file = [];

	var array_day = [];
	var array_addr = [];
	var max_i = 0;

	
client.fetch(file_link + word,function (err, $, res, body){
  		//console.log(res.headers);

		array_flag.push($('flag').text());
		if(array_flag[0] != null){
			word++;
		}


		console.log(str1);
			array_bj_id.push($('bj_id').text());
		console.log($('bj_id').text());
		console.log(str1);
			array_bj_logo.push($('logo').text());
		console.log($('logo').text());
		console.log(str1);
			array_nickname.push($('nickname').text());
		console.log($('nickname').text());
		console.log(str1);
			array_title.push($('title').text());
  		console.log($('title').text());
		console.log(str1);
			array_titleImage.push($('titleImage').text());
		console.log($('titleImage').text());
		console.log(str1);
			
			$('file').each(function(idx){
			array_key.push($(this).attr('key'));
			});

		if(typeof array_key[0] == "undefined"){
			array_key[0] = array_key[1];
			array_day[0] = array_day[1];
		}

		if(typeof array_key[1] == "undefined"){
			array_key[1] = array_key[0];
			array_day[1] = array_day[0];
		}

		console.log(str1);
			
			$('file').each(function(idx){
			array_addr.push($(this).text());
			});
			
			if(array_addr[0] != null){
				word++;
			}

for(i=0; array_key[i] != null;){
			array_day[i] = array_key[i].substring(0,8);
			i++;
}
			//console.log(array_day);


for(i=0; array_addr[i] != null;){

		if(array_addr[i].indexOf('/m') == -1){
			if(i<9){
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-42);
			}else{
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}
			i++;
		}else{
			if(i<9){
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else{
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-44);
			}
			i++;
		}
}
		
  		//console.log(array_addr);
		console.log(str2);
	max_i = i;
	//console.log(max_i);

	if(max_i != 0){
	var connection = mysql.createConnection({                           
  		host: 'localhost',
 		port:3306,
  		user:'mulggogi',
  		password:'welcome9',
  		database:'afreecatv'
	});


	connection.connect();


	for(i=0; i<max_i;){

	var sqlQuery1 = "INSERT INTO files2 SET ? ON DUPLICATE KEY UPDATE fino = fino, ino = ino, fiday = fiday, fititle = fititle, fititleimg = fititleimg, ffile = ffile";

	var post1 = {fino : word, ino : i+1, fiday : array_day[i], fititle : array_title[0], fititleimg : array_titleImage[0], ffile : array_file[i]};
	
	var query1 = connection.query(sqlQuery1, post1, callback1);

	i++;

	}

	function callback1(err1,result1){
    	if(err1){
        	throw err1
   	}
    		console.log("Insert Complete!");
   		console.log(query1.sql);
	}

	console.log(str1);
	connection.end();
	}

		});
	


};

foo();


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
