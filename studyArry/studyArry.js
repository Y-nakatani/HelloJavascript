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
