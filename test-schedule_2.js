
var http = require('http');
var schedule = require('node-schedule');

function httpGet(){
	http.get('http://www.yunruishop.com/index.php?controller=ecm&action=get_payNumber',function(res){
		console.log(res.statusCode);
		var json = '';
		res.on('data',function(data){
			json+= data;
		});
		res.on('end',function(){
			console.log(json);
		})

	}).on('error',function(e){
		console.log(e.message);
	});
	
};


var rule = new schedule.RecurrenceRule();
var times = [1,6,11,16,21,26,31,36,41,46,51,56];//每5s执行一次
//以秒为单位的定时任务
rule.second = times;
//以分为单位的定时任务
// rule.minute=times;
//以小时为单位的定时任务
// var times=[1,5,9,13,17,21];
// rule.hour=times;
schedule.scheduleJob(rule,function(){

	httpGet();
	console.log('end');

});


//还有种方式是Cron方式
//没房总的5s执行这个
//			*  						*    			*      			  *                *  				 *
//分别对应  second(0-59,optional)   minute(0-59)  hour(0-23)   day of month(1-31)	month(1-12)		day of week(0-7)(0 or 7 is Sun)
schedule.scheduleJob('5 * * * * *',function(){

	httpGet();
	console.log('end');

});


