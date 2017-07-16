var str1 = "\n";
var str2 = "\t";

var i = 0;

console.log(str1);
console.log("혜루찡 다시보기 크롤링!");

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var royaljoin = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15228730&szBjId=royaljoin';
var epsthddus = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15189885&szBjId=epsthddus';
var partypeople = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15992639&szBjId=partypeople';
var jieun12125 = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=16354849&szBjId=jieun12125';
var nytcom = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=16526421&szBjId=nytcom';
var rrvv17 = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=788815&szBjId=rrvv17';

var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?&nRowNum=30&nTitleNo=';


client.fetch(royaljoin,function (err, $, res, body){
	//console.log(res.headers);

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


		//for(i=0; word[i] != null;){
		//word1[i] = word[i].substring(word[i].length,word[i].length-8);
		//i++;
		//}

		console.log(word);
		//console.log(word1);
	
});