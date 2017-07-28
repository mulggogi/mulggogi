var readline = require('readline');
var j = 0;

var str1 = "\n";
var str2 = "\t";

var r = readline.createInterface({ input:process.stdin, output:process.stdout }); 

r.setPrompt('입력> '); 
r.prompt(); 

r.on('line', function(line){ 
		if (line == 'exit') { 
			r.close(); 
		} 
		
		j = line; 

		r.prompt();

		console.log(Date());


console.log(str1);
console.log("부식^.^ 다시보기 크롤링!");

var client = require('cheerio-httpcli');
var mysql = require('mysql');

var royaljoin = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15228730&nRowNum=60';
var epsthddus = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15189885&nRowNum=60';
var partypeople = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=15992639&nRowNum=60';
var jieun12125 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=16354849&nRowNum=60';
var nytcom = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=16526421&nRowNum=60';
var rrvv17 = 'http://stbbs.afreecatv.com/app/list_ucc.cgi?nStationNo=788815&nRowNum=60';


var file_link = 'http://afbbs.afreecatv.com:8080/api/video/get_video_info.php?&nRowNum=30&nTitleNo=';


var connection = mysql.createConnection({                           
  host: 'localhost',
  port:3306,
  user:'mulggogi',
  password:'welcome9',
  database:'afreecatv'
});

var i = 0;


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
	var max_i = "";


		$('li').each(function(idx){
		word.push($(this).attr('id'));
		});

for(i=0; word[i] != null;){
		word1[i] = word[i].substring(word[i].length,word[i].length-8);
		i++;
		}
		
		//console.log(word1);
	

	client.fetch(file_link + word1[j],function (err, $, res, body){
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

		console.log(array_key);


		console.log(str1);
			
			$('file').each(function(idx){
			array_addr.push($(this).text());
			});


		for(i=0; array_key[i] != null;){
			array_day[i] = array_key[i].substring(0,8);
			i++;
		}

	

		console.log(array_day);


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
		console.log(max_i);

		//console.log(array_file);

	connection.connect();
for(i=0; i<max_i;){

	var sqlQuery1 = "INSERT INTO files SET ? ON DUPLICATE KEY UPDATE fino = fino, ino = ino, fiday = fiday, fititle = fititle, fititleimg = fititleimg, ffile = ffile";

	var post1 = {fino : word1[j], ino : i+1, fiday : array_day[i], fititle : array_title[0], fititleimg : array_titleImage[0], ffile : array_file[i]};
	
		//if(i<max_i){
			var query1 = connection.query(sqlQuery1, post1, callback1);
			i++;
		//}
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
	
		
	
	});
});

}); 

r.on('close', function() { process.exit(); });

