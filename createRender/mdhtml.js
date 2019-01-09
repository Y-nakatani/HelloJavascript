class Render {
  static md2html(string){
   /* if(string.match(/^######\s/)){
      var h6 = string.replace(/^######\s/, '<h6>');
      return h6 + '</h6>';
    }else if (string.match(/^#####\s/)){
      var h5 = string.replace(/^######\s/, '<h5>');
      return h5 + '</h5>';
    }else if(string.match(/^####\s/)){
      var h4 = string.replace(/^####\s/, '<h4>');
      return h4 + '</h4>';
    }else if(string.match(/^###\s/)){
      var h3 = string.replace(/^###\s/, '<h3>');
      return h3 + '</h3>';
    }else  if(string.match(/^##\s/)){
      var h2 = string.replace(/^##\s/, '<h2>');
      return h2 + '</h2>';
    }else if(string.match(/^#\s/)){
      var h1 = string.replace(/^#\s/, '<h1>');
      return h1 + '</h1>';
    }*/
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
        var ul = string.replace(/^-\s/, '<ul>');
        var li = ul.replace(/\n\t-\s/m, '\n\t<li>');
        return li + '</li>\n</ul>';
        break;
    }
    return string;
  }
}

console.log(Render.md2html('- hoge###\n\t- #あ+=(#)\n\t- !#R*)あ'))

