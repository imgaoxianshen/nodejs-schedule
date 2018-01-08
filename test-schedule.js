//使用定时任务
var schedule=require('node-schedule');
var http=require("http");

function httpGet(){
	http.get('http://www.yunruishop.com/index.php?controller=ecm&action=get_payNumber',function(res){
		var json = '';
		res.on('data',function(data){
			console.log(data);
			json+=data;
		});
		res.on('end',function(){
			console.log(json);
		});

	}).on('error',function(e){
		console.log(e.message);
	});
	
}
console.log(123);

var date=new Date(2018,0,8,12,39.0);
schedule.scheduleJob(date,function(){
	httpGet();
})
