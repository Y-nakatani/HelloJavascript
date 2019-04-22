console.log("keyとvalueを自身のプロパティのみ全て出力");
const obj = {key: 'aa', key2: 'bb'};
for(key in obj){
  if(obj.hasOwnProperty(key)){
    //hasOwnPropertyは、自身が指定されたプロパティを持っているかどうかの真偽値を返す
    console.log(key, obj[key]);
  }
}
