console.log("コンストラクタの初期値に文字列を渡し新スタンスプロパティにnameを代入");
console.log("インスタンスメソッドgetNameの返り値がWho.prototype.name値になるclassのようなものを作成");
function Who(name){
  this.name = name;
};
Who.prototype.getName = function(){
  console.log('My name is ' + this.name);
};
var o = new Who('motira');
o.getName()

Age.prototype.getName = function(){
  console.log('Im ' + this.number);
}
var n = new Age('12');
n.getName()
function Age(number){
  this.number = number;
}
