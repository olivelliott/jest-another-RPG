class Character {
    constructor(name = ' ') {
        this.name = name;
        this.health = Math.floor(Math.random() * 10 + 85);
        this.strength = Math.floor(Math.random() * 5 + 5);
        this.agility = Math.floor(Math.random() * 5 + 5);
    }

    isAlive = function () {
        if (this.health === 0) {
            return false;
        } return true;
    };

    getHealth() {
        return `${this.name}'s health is now ${this.health}!`;
    };

    getAttackValue() {
        const min = this.strength - 5;
        const max = this.strength + 5;

        return Math.floor(Math.random() * (max - min) + min);
    };

    reduceHealth(health) {
        this.health -= health;

        if (this.health < 0) {
        this.health = 0;
        };
    };
};

module.exports = Character;

