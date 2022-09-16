class Centaur {
  constructor(centaurObject){
    this.name = centaurObject.name;
    this.breed = centaurObject.type;
    this.cranky = false;
    this.standing = true;
    this.counter = 0;
    this.layingDown = false;
  }

  shootBow() {
    if (this.cranky || this.standing === false) {
      return 'NO!'
    } else {
      this.counter++ ;
      if (this.counter > 2) {
      this.cranky = true
      };
      return 'Twang!!!'
    }
  }

  run() {
    if (this.cranky || this.standing === false) {
      return 'NO!'
    } else {
        this.counter++ ;
        if (this.counter > 2) {
          this.cranky = true
        }
        return 'Clop clop clop clop!!!'
      }
    }


  sleep() {
    if (this.standing === true) {
      return 'NO!'
    } else {
      this.cranky = false;
      return 'ZZZZ';
    }
  }

  layDown() {
    this.layingDown = true;
    this.standing = false;
  }

  standUp() {
    this.standing = true;
    this.layingDown = false;
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false
    } else {
      return "Not while I\'m laying down!"
    }
  }
}


module.exports = Centaur
