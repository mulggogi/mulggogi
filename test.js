var str1 = "\n";
var str2 = "\t";

var i = 0;
phantom.casperPath = './node_modules/casperjs';
phantom.injectJs('./node_modules/casperjs/bin/bootstrap.js');

var fs = require('fs');

var casper = require('casper').create({
    pageSettings: {
        loadImages: false,//The script is much faster when this field is set to false
        loadPlugins: false,
        userAgent: 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/44.0.2403.157 Safari/537.36'
    }
});

//open afreecatv
casper.start().thenOpen("http://login.afreecatv.com:8100/afreeca/login.php", function() {
    console.log("afreecatv website opened");
});

//로그인
casper.then(function(){
    console.log("해당 id와 pw로 로그인 합니다.");
    this.evaluate(function(){
        document.getElementById("uid").value="your_id";
            document.getElementById("password").value="your_password";
            document.getElementById("action").children[0].click();
    });
});

casper.run();

console.log(str1);
console.log("다시보기 크롤링! 테스트");

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var royaljoin = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15228730&szBjId=royaljoin';
var epsthddus = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15189885&szBjId=epsthddus';
var partypeople = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=15992639&szBjId=partypeople';
var jieun12125 = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=16354849&szBjId=jieun12125';
var nytcom = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=16526421&szBjId=nytcom';
var rrvv17 = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=788815&szBjId=rrvv17';
var sonicboom83 = 'http://live.afreecatv.com:8079/app/main_content.cgi?nStationNo=3411558&szBjId=sonicboom83';

var rrvv172 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=788815&nRowNum=60';
var jieun121252 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=16354849&nRowNum=60';
var epsthddus2 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885';

var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?&nRowNum=30&nTitleNo=';


client.fetch(rrvv17,function (err, $, res, body){
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

		for(i=0; word[i] != null;){
		word1[i] = word[i].substring(word[i].length,word[i].length-8);
		i++;
		}

		console.log(word1);


		client.fetch(file_link + word1[4],function (err, $, res, body){
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

		if(array_addr[i].indexOf('/m') == -1){
			if(i<9 && array_addr[i].indexOf('_10.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_11.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_12.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_13.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_14.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_15.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_16.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_17.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_18.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_19.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i<9 && array_addr[i].indexOf('_20.mp4') != -1){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else if(i>=9){
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else{
					array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-42);
			}

			//i++;
		}else{
			if(i<9){
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-43);
			}else{
				array_file[i] = array_addr[i].substring(array_addr[i].length,array_addr[i].length-44);
			}
			//i++;
		}
		i++;
		}

		console.log(array_addr);
		console.log(str2);
		console.log(array_file);
		console.log(str2);
		//for(i=0; word[i] != null;){
		//word1[i] = word[i].substring(word[i].length,word[i].length-8);
		//i++;
		//}

		//console.log(word);
		//console.log(word1);

});
});
