function alertArry(){
	var xx = new Array(3);
	xx[0] = "sun";
	xx[1] = "mon";
	xx[6] = "sat";
	var yy = new Array("sun", "mon", "sat");
	alert(yy[0] + yy[1] + yy[2]);
}
function checkArray(){
	var zz = new Array();
	zz[0] = "AAA";
	zz[1] = "BBB";
	zz[2] = "CCC";
	if (1 in zz){
		alert("yes");
	}
}
function deleteArray(){
	var kk = new Array(3);
	kk[0] = "DDD";
	kk[1] = "EEE";
	kk[2] = "FFF";
	delete kk[1];
	alert(kk);
}
function arrayLength(){
	var ff = new Array(3);
	ff[0] = "aa";
	ff[1] = "bb";
	ff[2] = "cc";
	alert(ff.length);
}
function concatArray(){
	var uu = new Array("sun", "mon", "tue", "wed");
	var oo = new Array("thu", "fri", "sat");
	var tt = uu.concat(oo);
	alert(tt);
}
function pushArray(){
	var a = new Array("sun", "mon");
	a.push("tue");
	a.push("wed");
	alert(a);
}
function joinArray(){
	var b = new Array("2018", "12", "01");
	var c = b.join("/");
	alert(c);
}
function spliceArray(){
	var d = new Array("A", "B", "C", "D", "E", "F", "G");
	var e = d.splice(2, 3, "c", "d", "e");
	alert(e);
}
