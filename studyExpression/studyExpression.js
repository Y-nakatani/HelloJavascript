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
