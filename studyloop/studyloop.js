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
function StudyDo(){
	var n = 0;
	do{
		console.log(n);
		n++;
	}while(n < 10);
}
function StudyFor(){
	var ary = ["red", "blue", "yellow"];
	for(i in ary){
		console.log(ary[i]);
	}
}
function StudyForIn(){
	for (i in navigator){
		console.log(i, "<br>");
	}
}
function StudyForOf(){
	var set = new Set();
	set.add("tanaka");
	set.add("suzuki");
	set.add("satou");
	for(var value of set){
		console.log(value);
	}
}
function StudyForBreak(){
	for (i = 0; i < 10; i++){
		if (i == 5){
			break;
		}
		console.log(i);
	}
}
function StudyForBreakLabel(){
	abc:
	for(i = 0; i < 10; i++){
		for(j = 0; j < 10; j++){
			xx = i*10+j;
			if(xx > 20){
				break abc;
			}
			console.log(xx);
		}
	}
}
function StudyWith(){
	with(document){
		write(URL);
		write(domain);
	}
}
function StudyThrow(){
	try{
		erro = doSomething();
		if(erro){
			throw "myException";
		}
	}catch(e){
		console.log(e);
	}finally{
		console.log("finally");
	}
}
