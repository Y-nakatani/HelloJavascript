var xx = 5;
let aa = 100;
function Study(){
	var yy = 8;
	var zz = xx + yy;
	window.alert(zz);
}
function StudyLet(){
	let aa = 30;
	window.alert(xx+aa);
	for (let i = 0; i < 10; i++){
		console.log(i);
	}
}
function StudyConst(){
	const bb = 40;
	bb = 20; //err
	console.log(bb);
}
function StudyIf(){
	let n = 10;
	if (n < 20){
		alert("n is small");
	}
}
