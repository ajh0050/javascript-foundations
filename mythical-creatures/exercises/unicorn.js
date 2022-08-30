class Unicorn {
  constructor(name, color='white') {
    this.name = name;
    this.color = color;
  }
  isWhite(){
    if (this.color == 'white'){
      return true
    } else {
      return false
    };
  }
  says(text){
    return `**;* ${text} *;**`
  }
}

module.exports = Unicorn;
