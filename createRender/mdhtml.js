class Render {
  static md2html(string){
    var re = string.replace(/#/, '<h1>');
    return re + '</h1>';
  }
}

console.log(Render.md2html('#hogeあ +=()!#R*)あ'))

