class Render {
  static md2html(string){
    switch (true) {
      case /^######\s/.test(string):
        var h6 = string.replace(/^######\s/, '<h6>');
        return h6 + '</h6>';
        break;
      case /^#####\s/.test(string):
        var h5 = string.replace(/^#####\s/, '<h5>');
        return h5 + '</h5>';
        break;
      case /^####\s/.test(string):
        var h4 = string.replace(/^####\s/, '<h4>');
        return h4 + '</h4>';
        break;
      case /^###\s/.test(string):
        var h3 = string.replace(/^###\s/, '<h3>');
        return h3 + '</h3>';
        break;
      case /^##\s/.test(string):
        var h2 = string.replace(/^##\s/, '<h2>');
        return h2 + '</h2>';
        break;
      case /^#\s/.test(string):
        var h1 = string.replace(/^#\s/, '<h1>');
        return h1 + '</h1>';
        break;
      case /^```\s/.test(string):
        var p = string.replace(/^```\s/, '<p>');
        return p + '</p>';
        break;
      case /^-\s/.test(string):
        var arr = string.split(/\r\n|\r|\n/);
        var ul = arr[0].replace(/^-\s/, '<ul>');
        var hoge = [];
        var fuga = [];
        for (let i = 0; i<arr.length-1; i++){
          hoge[i] = arr[i+1].replace(/^\t-\s/gm, '\n\t<li>');
          fuga[i] = hoge[i] + '</li>'
        }
        return ul + fuga.join('') + '\n</ul>';
        break;
    }
    return string;
  }
}
console.log("h1test");
console.log(Render.md2html('# nivf-の#の'))

console.log("h2test");
console.log(Render.md2html('## mo+=あ##あ') === '<h2>mo+=あ##あ</h2>')

console.log("h3test");
console.log(Render.md2html('### mvo###ew023あ') === '<h3>mvo###ew023あ</h3>');

console.log("h4test");
console.log(Render.md2html('#### 90n####あ') === '<h4>90n####あ</h4>');

console.log("h5test");
console.log(Render.md2html('##### お#####moe58') === '<h5>お#####moe58</h5>');

console.log("h6test");
console.log(Render.md2html('###### mc##-=44') === '<h6>mc##-=44</h6>');

//リスト
console.log(Render.md2html('- hoge###\n\t- #あ+=(#)\n\t- !#R*)あ'))

