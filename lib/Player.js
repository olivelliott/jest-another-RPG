const Potion = require('../lib/Potion')

function Player(name = ' ') {
    this.name = name;

    this.health = Math.floor(Math.random() * 10 + 95);
    this.strength = Math.floor(Math.random() * 5 + 7);
    this.agility = Math.floor(Math.random() * 5 + 7);
    this.inventory = [new Potion('health'), new Potion()];
};

module.exports = Player;

// To recap, new Player('Dave') created a new player object that had four properties. 
// The object had a name property equal to 'Dave' and three additional Number properties.