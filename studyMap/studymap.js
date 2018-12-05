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
		console.log(key, ":", map.get(key));
	}
}
