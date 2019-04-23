console.log("配列の要素がランダムで出力される関数");
var arry = ['a1','a2','a3','a4','a5'];
function greeting(){
  console.log(arry[Math.floor(Math.random() * Math.floor(arry.length))]);
}
greeting();
