function setNewMap(){
	var map = new Map();
	map.set("width", 160);
	map.set("height", 120);
	map.get("width");
	map.get("height");
}
function forValueMap(){
	const map = new Map([["width", 160], ["height", 120]]);
	for (var [key, value] of map){
		console.log(key, ":", value);
	}
}
function forKeys(){
	const map = new Map([["width", 160], ["height", 120]]);
	for (var key of map.keys()){
		console.log(key, ":", map.get(key));
	}
}
function forValue(){
	const map = new Map([["width", 160], ["height", 120]]);
	for (var value of map.values()){
		console.log(value);
	}
}
function forEntries(){
	const map = new Map([["width", 160], ["height", 120], ["tanaka", 170]]);
	for (var [key, value] of map.entries()){
		console.log(key, ":", value);
	}
}
