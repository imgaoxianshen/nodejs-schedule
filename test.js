//使用setTimeout
var request =require("request");
function my_self(){
	request('http://www.yunruishop.com/index.php?controller=ecm&action=get_payNumber',function(error,response,body){
		if(!error && response.statusCode == 200){
			console.log(body);
		}
		setTimeout(function(){
			my_self();
		},2000)
	});
}
my_self();