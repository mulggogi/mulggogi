let printHello = () =>console.log("혜루찡 다시보기 크롤링!");
printHello();

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'mulggogi',
	password: 'welcome9'
});

connection.connect(function(err){
	if(err){
		console.log('DB접속 실패');
		console.log(err);
		throw err;
	}else{
		console.log('DB접속 성공');
	}
});

connection.query('use afreecatv',function (err) {
    if(err) console.log(err);
});

var royaljoin = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15228730';
var epsthddus = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885';
var partypeople = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15992639'


var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?nTitleNo=';


client.fetch(epsthddus,function (err, $, res, body){
	console.log(res.headers);

	var word1 = [];

	var array_bj_id = [];
	var array_bj_logo = [];
	var array_nickname = [];
	var array_title = [];
	var array_titleImage = [];
	var array_file = [];

	let wordlink = () =>console.log(word1);
	var i = null;


		$('li').each(function(idx){
		word1.push($(this).attr('id'));
		});
		//console.log(word1);
	
	for(i=0;word1[i];i++){

	client.fetch(file_link + word1[i],function (err, $, res, body){
  		console.log(res.headers);

		var str1 = "\n";
		var str2 = "\t";
 		
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
			array_file.push($('file').text().split(".mp4"));
  		console.log($('file').text().split(".mp4"));
		console.log(str2);
     		

		});

	}
	connection.end();
});