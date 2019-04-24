console.log("文字列10をNumber型にし数値か否かを評価後文字列に変換");
var a = '10';
var b = parseInt(a, 10);
console.log(typeof a);
console.log(typeof b);
console.log(isNaN(a));
var c = b.toString();
console.log(c + ':' + typeof c);
