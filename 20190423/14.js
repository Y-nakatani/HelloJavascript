console.log("実行したら引数が配列で返る関数fun");
function fun(){
  return Array.from(arguments)
}
console.log("argmentsは関数へ渡された引数を含む関数内のみアクセス可能な配列用オブジェクト");
console.log(fun(1,2,4,5,3));
