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
var localMap = new Map([["width", 160], ["height", 120]]);
function forEachValue(){
	localMap.forEach(function(value){
		console.log(value);
	})
}
function forEachKey(){
	localMap.forEach(function(value, key){
		console.log(key, ":", value);
	})
}
function forEachMap(){
	localMap.forEach(function(value, key, map){
		localMap.set(key, value * 2);
		console.log(key, ":", map.get(key));
	});
}
function forEachValueKey(){
	localMap.forEach(function(value, key){
		this.set(key, value * 2);
		console.log(key, ":", this.get(key));
	},localMap);
}
function clearMap(){
	console.log(localMap);
	localMap.clear();
	console.log(localMap);
}
