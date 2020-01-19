let hundred = 100;
let fifty = 50;
let sixtySix = 66;

function Fighter(that) {
    let name = that.name;
    let damage = that.damage;
    let hp = that.hp;
    let strength = that.strength;
    let agility = that.agility;
    let wins = 0;
    let losses = 0;

    this.getName = () => {
        return name;
    }
    this.getDamage = () => {
        return damage;
    }
    this.getStrength = () => {
        return strength;
    }
    this.getAgility = () => {
        return agility;
    }
    this.getHealth = () => {
        return hp;
    }
    this.attack = (defender) => {
        if (Math.floor(Math.random() * hundred) + 1 <= hundred - this.getStrength() - this.getAgility()) {
            defender.dealDamage(damage);
            console.log(`${this.getName()} makes ${damage} damage to ${defender.getName()}`);
        } else {
            console.log(`${this.getName()} attack missed`);
        }
    }
    this.logCombatHistory = () => {
        console.log(`Name: ${name}, Wins: ${wins}, Losses: ${losses}`);
    }
    this.heal = (healthPoints) => {
        hp = hp + healthPoints >= hundred ? hundred : hp + healthPoints;
    }
    this.dealDamage = (healthPoints) => {
        hp = hp <= healthPoints ? 0 : hp - healthPoints;
    }
    this.addWin = () => {
        wins++;
    }
    this.addLoss = () => {
        losses++;
    }
}

let battle = (fighter1, fighter2) => {
    if(fighter1.getHealth() === 0) {
        console.log(`${fighter1.getName()} is dead and can\`t fight.`);
    } else if(fighter2.getHealth() === 0) {
        console.log(`${fighter2.getName()} is dead and can\`t fight.`);
    } else {
        while(fighter1.getHealth() !== 0 && fighter2.getHealth() !== 0) {
            fighter1.attack(fighter2);
            if (fighter2.getHealth() !== 0) {
                fighter2.attack(fighter1);
            }
        }
        if(fighter1.getHealth() === 0) {
            console.log(`${fighter2.getName()} has won!`);
            fighter2.addWin();
            fighter1.addLoss();
        } else if(fighter2.getHealth() === 0) {
            console.log(`${fighter1.getName()} has won!`);
            fighter1.addWin();
            fighter2.addLoss();
        }
    }
}

const fighter1 = new Fighter({name: 'Maximus', damage: 25, hp: 100, strength: 35, agility: 25});
const fighter2 = new Fighter({name: 'Commodus', damage: 20, hp: 100, strength: 30, agility: 30});

console.log(fighter1.hp);
battle(fighter1, fighter2);
battle(fighter1, fighter2);
fighter2.heal(fifty);
fighter1.heal(sixtySix);
fighter1.getHealth();
fighter2.getHealth();
fighter1.logCombatHistory();
fighter2.logCombatHistory();
fighter2.getStrength();