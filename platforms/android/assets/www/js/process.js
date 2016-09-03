var img = 'img.jpg';
var var_img = "<div style='position: relative;top: 100px;color: #fff;'>Your Name Here</div><img style='width: 300px;'  src='img/"+img+"' />";
var var_vid ='<video controls="" style="width: 300px;" autoplay="" name="media"><source src="vid/slider_FERRARI-GTC4LUSSO_film_ufficiale_2-2000_HBRRN3.webm"></video>';
$('#img').html(var_img);
$('#vid').html(var_vid);

// if
// if-else
// if-else if
// try - catch

// conditionals

var status = 4;

// console.log(status);
// if(status === '1'){
// 	console.log(1);
// }
// else if(status === '2'){
// 	console.log(2);
// }
// else{
// 	console.log(3);
// }
/*
// try-catch
// i stoped here

try{
	var a = 1, b = 0 ;
	var result = 0;

	result = a/b;
	$("#conditionals").html(result);
}
catch(e){
	console.log(e);
	console.log("May Error");
}

var func = function(){
	var x = 10;
	((x%2)==0)?console.log("true"):console.log("false");
}
func();
var func2 = function(){
	var x = 21;
	if((x%2)==0){
		console.log("true");
	}
	else{
		console.log("false");
	}
}
func2();

*/

/*$('document').ready(function(){
	// variable declarations
	// string
		var var_name1 = "value";
		var var_name2 = 'value';

	// number
		var var_name = 143;

	// boolean
		var var_name1 = true;
		var var_name2 = false;

		var var_name3 = 1; // true
		var var_name4 = 0; // false

	// arrays
		var array_name1 = new Array(Name => 'Rufo', Age => 18);
		var array_name2 = [Name => "Rufo", Age => 18];


		console.log(array_name1);
		console.log(array_name1[0]);
		console.log(array_name2[1]);

	// objects JSON (JavaScript Object Notation)
	var object_name = {"Name":"Rufo","Age":18};
	console.log(object_name);
	console.log(object_name.Name);
	console.log(object_name.Age);

	// functions
		// anymous and named
			var func_name = function(){  //parent function
				'use strict';

				return {
					plus: function(num1,num2){ // child function
						return num1+num2;	
					},
					minus: function(num1,num2){
						return num1-num2;
					},
					devide:function(num1,num2){
						return num1/num2;
					},
					multiply:function(num1,num2){
						return num1*num2;
					},
					modulus:function(num1,num2){
						return num1%num2;
					},
					all:function(){
						var a = 200, b = 500;
						var content = "";
						var res = this.plus(a,b);
						content += a+" + "+b+" = "+res+"<br/>";

						var res = this.minus(a,b);
						content += a+" - "+b+" = "+res+"<br/>";

						var res = this.devide(a,b);
						content += a+" / "+b+" = "+res+"<br/>";

						var res = this.multiply(a,b);
						content += a+" * "+b+" = "+res+"<br/>";

						var res = this.modulus(a,b);
						content += a+" % "+b+" = "+res+"<br/>";

						return content;
					}
				}
			}

func_name();

var content = func_name().all();
console.log(content);

$(".content-block p").html(content);
});
*/

// loops
// while()
// for()
// $.each()

// var arr = [33,21,10,8,23,7,16,22,18,19];
// var obj = {"a":33,"b":21,"c":10,"d":8,"e":23,"f":7,"g":16,"h":22,"i":18,"j":19};

// console.log(obj);
// var arrlength = arr.length;
// console.log(obj.length);

// var x = 10;
// var y = 0;
// while((arrlength-1)>=y){
// 	console.log(arr[y]);
// 	y++;
// }

// var y = 0;
// for(x=(arrlength-1);x>=y;y++){
// 	console.log(arr[y]);
// }

// $.each(obj,function(a,b){
// 	console.log(obj.e);
// });

var binary = function(n){
	if((n<=0)||(n>=8)){
		return "subnets cannot be greater or equal to 8.";
	}
	else{
		var result = 1;
		for(x=1;x<=n;x++){
			result = result*2;
		}
		return result;
	}
}

var getIPHost = function(ip){
	ip = ip.split('.');
	return parseInt(ip[3]);
}

var getIP = function(ip){
	ip = ip.split('.');
	return ip;
}

var ipAddressing = function(ipaddress){
	var host = getIPHost(ipaddress);
	var n = 1;
	var s = binary(n); // 2^n
	var h = binary(8-n); // 2^n-8

	var ip = getIP(ipaddress)[0]+'.'+getIP(ipaddress)[1]+'.'+getIP(ipaddress)[2];

	var x = 0, NA = 0, Fh = 0, Lh = 0, BA = 0;
	
	for(loop=1;loop<=s;loop++){
		NA = x;
		Fh = NA+1;
		Lh = (NA+h)-2;
		BA = Lh+1;
		x=x+h;
		console.log("NA: "+ip+'.'+NA);
		console.log("Fh: "+ip+'.'+Fh);
		console.log("Lh: "+ip+'.'+Lh);
		console.log("BA: "+ip+'.'+BA);
		console.log(" ");
	}
}

var ip = "192.168.1.0";
ipAddressing(ip);

/*
	1. set ip
	2. identify host
	3. identify subnets
	4. loop
		1. get NA = ip + x;
		2. get Fh = ip + 1;
		3. get Lh = (NA + h) - 2;
		4. get BA = Lh + 1;
		5. set x = x + h;
		6. loop back;
*/


