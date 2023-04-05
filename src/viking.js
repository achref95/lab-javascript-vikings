// Soldier
class Soldier {
    constructor(health, strength) {
    this.health = health
    this.strength = strength
    }
    
    attack() {
        return this.strength
    }
    
    receiveDamage(damage) {
        this.health -= damage
    }
}

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
        super(health, strength)
        this.name = name
    }

    receiveDamage(damage) {
        this.health -= damage
        if (this.heath > 0) {
            return `${this.name} has received ${damage} points of damage`
        } else {
            return `${this.name} has died in act of combat`
        }
    }
    battleCry() {
        return "Odin Owns You All!"
    }
}

// Saxon
class Saxon extends Soldier {
    constructor(health, strength) {
        super(health, strength)
    }
    attack() {
        return this.strength
    }
    receiveDamage(damage) {
        this.health -= damage
        if (this.heath > 0) {
            return `A Saxon has received ${damage} points of damage`
        } else {
            return "A Saxon has died in combat"
        }
    }

}

// War
class War {
    constructor() {
        this.vikingArmy = []
        this.saxonArmy = []
    }
    addViking(viking) {
        this.vikingArmy.push(viking)
    }
    addSaxon(saxon) {
        this.saxonArmy.push(saxon)
    }
    vikingAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length)
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length)

        const viking = this.vikingArmy[randomViking]
        const saxon = this.saxonArmy[randomSaxon]
        const damage = viking.strength
        const result = saxon.receiveDamage(damage)

        if (saxon.health <= 0) {
            this.saxonArmy.splice(randomSaxon, 1)
        }

        return result
    }
    saxonAttack() {
        const randomSaxon = Math.floor(Math.random() * this.saxonArmy.length);
        const randomViking = Math.floor(Math.random() * this.vikingArmy.length);

        const saxon = this.saxonArmy[randomSaxon];
        const viking = this.vikingArmy[randomViking];
        const damage = saxon.strength;
        const result = viking.receiveDamage(damage);

        if (viking.health <= 0) {
        this.vikingArmy.splice(randomViking, 1);
        }

        return result;
    }
    showStatus() {
        if (!this.saxonArmy.length) {
            return "Vikings have won the war of the century!"
        }
        if (!this.vikingArmy.length) {
            return "Saxons have fought for their lives and survived another day..."
        }
        if (this.vikingArmy > 0 && this.saxonArmy > 0) {
            return "Vikings and Saxons are still in the thick of battle."
        }
    }
}
