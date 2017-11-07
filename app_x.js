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

app.get('/test', function(request,response){
	//파일을 읽습니다.
	fs.readFile('list.html','utf8',function(error,data){
	//데이터베이스 쿼리를 수행합니다.
	connection.query('SELECT * FROM Files2 order by fino desc limit 60', function(error,results){
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


var j = 0;

function foo() {
  console.log(Date());
  setTimeout(foo, 100);


var str1 = "\n";
var str2 = "\t";

var i = 0;

console.log(str1);
console.log("즐겨찾기 크롤링!");

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var royaljoin = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15228730&szBjId=royaljoin';
var epsthddus = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15189885&szBjId=epsthddus';
var partypeople = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15992639&szBjId=partypeople';
var epsthddus2 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885';

var royal_time_link = 'http://live.afreecatv.com:8079/app/index.cgi?szBjId=royaljoin';
var eps_time_link = 'http://live.afreecatv.com:8079/app/index.cgi?szBjId=epsthddus';
var party_time_link = 'http://live.afreecatv.com:8079/app/index.cgi?szBjId=partypeople';

var bj = [royaljoin,epsthddus,partypeople,epsthddus2]

//var bj_link = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=';
//var bj = ['15228730','15189885','15992639'];


var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?&nRowNum=30&nTitleNo=';


client.fetch(bj[j],function (err, $, res, body){
	//console.log(res.headers);
	if(j==3){
		j=0;
	}else{
		j++;
	}

	var word = [];
	var word1 = [];

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


		$('a').each(function(idx){
		if($(this).attr('href').indexOf('http://vod.afreecatv.com/') > -1){
		word.push($(this).attr('href'));
		}
		});

		//$('li').each(function(idx){
		//word.push($(this).attr('id'));
		//});

		for(i=0; word[i] != null;){
		word1[i] = word[i].substring(word[i].length,word[i].length-8);
		i++;
		}

		//console.log(word1);


	client.fetch(file_link + word1[0],function (err, $, res, body){
  		//console.log(res.headers);

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

		console.log(str1);

			$('file').each(function(idx){
			array_addr.push($(this).text());
			});

for(i=0; array_key[i] != null;){
			array_day[i] = array_key[i].substring(0,8);
			i++;
}
			//console.log(array_day);


      for(i=0; array_addr[i] != null;){

      if(array_addr[i].indexOf('mvod') == -1){
        if(i<9 && array_addr[i].indexOf('_10.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_11.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_12.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_13.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_14.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_15.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_16.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_17.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_18.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_19.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i<9 && array_addr[i].indexOf('_20.mp4') != -1){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else if(i>=9){
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else{
            array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-56);
        }

        //i++;
      }else{
        if(i<9){
          array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-57);
        }else{
          array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-58);
        }
        //i++;
      }
      i++;
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

	var sqlQuery1 = "INSERT INTO Files SET ? ON DUPLICATE KEY UPDATE fino = fino, ino = ino, fiday = fiday, fititle = fititle, fititleimg = fititleimg, ffile = ffile";

	var post1 = {fino : word1[0], ino : i+1, fiday : array_day[i], fititle : array_title[0], fititleimg : array_titleImage[0], ffile : array_file[i]};

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

});

};

foo();
