console.log("evalは文字列を式として評価する関数");

console.log("eval('2+4')");
console.log(eval('2+4'));

console.log("eval(new String(2+2))");
console.log(eval(new String('2+2')));


console.log("eval('2+2') === eval('4')");
console.log(eval('2+2') === eval('4'));

console.log("eval('2+2') === eval(new String('2+2'))");
console.log(eval('2+2') === eval(new String('2+2')));
