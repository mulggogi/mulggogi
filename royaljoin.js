var http = require('http');
http.createServer(function(req,res){

var word1 = [];

	var array_bj_id = [];
	var array_bj_logo = [];
	var array_nickname = [];
	var array_title = [];
	var array_titleImage = [];
	var array_file = [];

	var i = null;



var str1 = "\n";
var str2 = "\t";


console.log(str1);
console.log("부식^.^ 다시보기 크롤링!");

var client = require('cheerio-httpcli');

var royaljoin = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15228730';
var epsthddus = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885';
var partypeople = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15992639';


var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?nTitleNo=';


client.fetch(royaljoin,function (err, $, res, body){
	console.log(res.headers);


		$('li').each(function(idx){
		word1.push($(this).attr('id'));
		});
		//console.log(word1);
	

	client.fetch(file_link + word1[0],function (err, $, res, body){
  		console.log(res.headers);
 		
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
			array_file.push($('file').text());
  		console.log($('file').text().split(".mp4"));
		console.log(str2);


		});

	
});

res.writeHead(200, {'Content-Type': 'application/json;charset=UTF-8'});
		
		res.write("부식^.^ 웹 크롤링 사이트 1.0");
		//res.write(array_bj_id[0] +'');
		//res.write(array_bj_logo[0]);
		//res.write(array_nickname[0]);
		//res.write(array_titleImage[0]);
		res.end();
}).listen(1337, '127.0.0.1');
		console.log('Server running at http://127.0.0.1:1337/');