function foo() {
  console.log(Date());
  setTimeout(foo, 200);


var str1 = "\n";
var str2 = "\t";


console.log(str1);
console.log("혜루찡 다시보기 크롤링!");

var client = require('cheerio-httpcli');

var royaljoin = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15228730';
var epsthddus = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885';
var partypeople = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15992639';


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

	var i = null;


		$('li').each(function(idx){
		word1.push($(this).attr('id'));
		});
		//console.log(word1);
	
	for(i=0;word1[i];i++){

	client.fetch(file_link + word1[i],function (err, $, res, body){
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
			array_file.push($('file').text().split(".mp4"));
  		console.log($('file').text().split(".mp4"));
		//console.log(array_file);
		console.log(str2);

		//다운로드
		download(
  		file_link + word1[0],
  		"epsthddus0.xml",
  		function(){console.log("ok~!epsthddus!");});


		//url의 파일을 savepath에 다운로드하는 함수
  		function download(url, savepath, callback){
    		var http = require('http');
    		var fs = require('fs');
    		var outfile = fs.createWriteStream(savepath);

    		var req = http.get(url, function(res){
      		res.pipe(outfile);
      		res.on('end',function(){
        	outfile.close();
        	callback();
      		});
    	});
}



		});

	}
	
});

};

foo();