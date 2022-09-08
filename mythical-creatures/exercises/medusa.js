var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name, statues = []){
    this.name = name
    this.statues = statues
  }
  gazeAtVictim(person){
    if (this.statues.length >2) {
      var unstonedPerson = new Person(this.statues[0].name, 'relieved')
      this.statues.shift()
    }
    this.statues.push(new Statue(person.name))
    return unstonedPerson
  }
}

module.exports = Medusa;
