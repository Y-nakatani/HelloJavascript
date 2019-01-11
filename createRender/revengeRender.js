function md2html(string){
  var textList = string.split('\n');
  var result = [];
  reshape(textList).forEach(function(val){
    if(isPlainText(val)){
      val = replaceToText(val);
    }
    result.push(val)
  });
  //console.log(result)
  return resultShape(result);
}


//checkマン
function CheckerMan(){
}

var patternText = new RegExp(/^([^#]+)$/)
var patternH1 = new RegExp(/^#(.+)$/)
var patternH2 = new RegExp(/^#{2}(.+)$/)
var patternH3 = new RegExp(/^#{3}(.+)$/)

//replaceマン
function replacerMan(){ 
}

function replaceToText(string){
  //console.log(string)
  return string.replace(patternText, textReplace);
}

//成形マン
function reshape(textList){
  var shapeList = [];
  textList.forEach(function(value){
    value = value.replace(/\s/gm, '');
    shapeList.push(value);
  });
  return shapeList;
}
//成形マンその2
function resultShape(result){
  return result.join('\n');
}


//plaintext
function isPlainText(string){
  return patternText.test(string);
}

//h1
function isH1(string){
  return patternH1.test(string);
}

//h2
function isH2(string){
  return patternH2.test(string);
}

//h3
function isH3(string){
  return patternH3.test(string);
}

//p
function textReplace(match, p1){
  return '<p>' + p1 + '</p>';
}

console.log(md2html('# hoge\n aaaa\n ## fuga\n ### ewni\n hogeeee'))
