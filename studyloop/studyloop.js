function StudySwitch(){
	n = 4;
	switch (n) {
		case 1:
			alert("one");
			break;
		case 2:
			alert("two");
			break;
		case 3:
		case 4:
			alert("three or four");
			break;
		default:
			alert("other");
			break;
	}
}
function StudyWhile(){
	var n = 0;
	while(n < 10){
		console.log(n);
		n++;
	}
}
