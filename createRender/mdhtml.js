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
        //var li = string.replace(/\n\t-\s/gm, '\n\t<li>');

        console.log(arr);
        var hoge = [];
        var fuga = [];
        for (let i = 0; i<arr.length-1; i++){
          hoge[i] = arr[i+1].replace(/^\t-\s/gm, '\n\t<li>');
          fuga[i] = hoge[i] + '</li>'
        }
        console.log(fuga);
        return ul + fuga.join('') + '\n</ul>';
        break;
    }
    return string;
  }
}

console.log(Render.md2html('- hoge###\n\t- #あ+=(#)\n\t- !#R*)あ'))

