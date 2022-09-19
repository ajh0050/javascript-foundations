const Direwolf = require("./direwolf");

class Stark {
  constructor (starkObject) {
    this.name = starkObject.name;
    this.location = starkObject.area || 'Winterfell';
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    } else {
      return'Winter is Coming'
    }
  }
  callDirewolf(name,location){
    var newDirewolf = new Direwolf(name,location);
    newDirewolf.home = this.location;
    newDirewolf.protect(this)
    return newDirewolf
  }
}

module.exports = Stark;
