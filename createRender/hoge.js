function md2html(text) {

  var textList = text.split('\n');
  var result = [];

  textList.forEach(function(v){
    v = v.replace(/^[\s]+/, '').replace(/[\s]+$/, '')
    if (isPlainText(v)) {
      v = replaceToText(v);
    }
    if (isH1(v)) {
      v = replaceToH1(v);
    }
    result.push(v)
  })

  return result.join('\n')
}

var patternText = new RegExp(/^([^#]+)$/)
var patternH1 = new RegExp(/^#(.+)$/)

function isPlainText(text) {
  return patternText.test(text)
}

function isH1(text) {
  return patternH1.test(text)
}

function replaceToText(text) {
  return text.replace(patternText, textReplacer)
}
function textReplacer(match, p1) {
  return '<p>' + p1 + '</p>';
}

function replaceToH1(text) {
  return text.replace(patternH1, h1Replacer)
}
function h1Replacer(match, p1) {
  return '<h1>' + p1 + '</h1>';
}

console.log(md2html('#hoge \n text \n #aa aa'));
console.log(md2html('#hoge'));
console.log(md2html('hoge \n text \n #aaaa'));
