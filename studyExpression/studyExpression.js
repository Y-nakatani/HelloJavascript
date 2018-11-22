function deleteObj(){
	var obj = {
		name: "tanaka",
		age: 33
	}
	console.log(obj);
	delete obj.name;
	console.log("delete done");
	console.log(obj);
}
void function func(){
	console.log("hello!!hello!");
}
function inExpression(){
	if("appName" in navigator){
		console.log("yes");
	}
}
function inExpression2(){
	var p1 = {
		name: "tanaka",
		age: 99
	}
	if ("name" in p1){
		console.log("yes");
	}
}
function studyInstanceOf(){
	function preson(){}
	var p2 = new preson();
	if(p2 instanceof preson){
		console.log("yes");
	}else{
		console.log("no");
	}
}
function studyEvent(){
	alert("ok!")
}
function doSubmit(form){
	if(window.confim("送信しますか？")){
		return true;
	}else{
		return false;
	}
}
