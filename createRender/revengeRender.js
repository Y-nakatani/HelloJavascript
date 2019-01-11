function md2html(string){
  var textList = string.split('\n');
  return replaceMan(textList);
}


var patternText = new RegExp(/^([^#]+)$/)
var patternH1 = new RegExp(/^#(.+)$/)
var patternH2 = new RegExp(/^#{2}(.+)$/)
var patternH3 = new RegExp(/^#{3}(.+)$/)

//replaceマン
function replaceMan(textList){
  var result  = [];
  reFormat(textList).forEach(function(val){
    if(isPlainText(val)){
      val = replaceToText(val);
     }
    if(isH1(val)){
      val = replaceToH1(val);
    }
    if(isH2(val)){
      val = replaceToH2(val);
    }
    if(isH3(val)){
      val = replaceToH3(val);
    }
     result.push(val)
  });
  return resultFormat(result);
}


//replaceはここ, replacerは下
function replaceToText(string){
  //console.log(string)
  return string.replace(patternText, textReplacer);
}

function replaceToH1(string){
  return string.replace(patternH1, h1Replacer);
}
function replaceToH2(string){
  return string.replace(patternH2, h2Replacer);
}
function replaceToH3(string){
  return string.replace(patternH3, h3Replacer);
}

//成形マン
function reFormat(textList){
  var formatList = [];
  textList.forEach(function(value){
    value = value.replace(/\s/gm, '');
    formatList.push(value);
  });
  return formatList;
}
//成形マンその2
function resultFormat(result){
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


//--------------replacerども
//pReplacer
function textReplacer(match, p1){
  return '<p>' + p1 + '</p>';
}

//h1Replacer
function h1Replacer(match, p1){
  return '<h1>' + p1 + '</h1>';
}

//h2Replacer
function h2Replacer(match, p1){
  return '<h2>' + p1  + '</h2>';
}

//h3Replacer
function h3Replacer(match, p1){
  return '<h3>' + p1  + '</h3>';
}

console.log(md2html('# hoge\n aaaa\n ## fuga\n ### ewni\n hogeeee'))
