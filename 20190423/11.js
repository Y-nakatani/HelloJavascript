let array = [
  {id:1, name:'morita'},
  {id:2, name:'kenji'},
  {id:4, name:'uro'},
  {id:3, name:'ken'},
];
console.log(array.sort(function(a,b){
  return a.id > b.id
}));
