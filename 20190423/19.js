console.log("Object.createで空のオブジェクトを作成し、値が1のプロパティpを出力");
const obj = Object.create({}, {p: {value: 1}});
console.log("obj:" + obj);
console.log("obj.p:" + obj.p);
