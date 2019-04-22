console.log("const arry = ['a', 'b']の各要素にindex値を足した文字列を出力してくださいe.g 'a0'と'b1'");
const arry = ['a', 'b'];
arry.forEach(function(key, i){
  console.log(key + i);
})
