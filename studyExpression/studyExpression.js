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
