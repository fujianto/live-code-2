class Hero {
	constructor(name, health, mana, defense) {
		this.name  = name;
		this.health = health;
		this.mana = mana;
		this.defense = defense;
	}
	
	skill(skillName = 'Skill Hero') {
		return skillName;
	}
}

// Assassin, Knight, Mage
class Assassin extends Hero {
	constructor(name, health, mana, defense) {
		super(name, health, mana, defense);
	}
}

class Knight extends Hero {
	constructor(name, health, mana, defense) {
		super(name, health, mana, defense);
	}
}

class Mage extends Hero {
	constructor(name, health, mana, defense) {
		super(name, health, mana, defense);
	}
}

class SummonHero {
	static panggil() {
		let chooseHero = SummonHero.acak();

		if (chooseHero > 85) {
			let hero = new Mage('Mage', 1130, 603, 231);
			hero.skill('Terimalah serangan sihir ini..');
			return hero;
			// console.log(hero.skill());
			
		} else if (chooseHero >= 51 && chooseHero < 85) {
			let hero = new Knight('Knight', 2130, 203, 131);
			hero.skill('Lemparan Perisai Suci');

			return hero;
		} else {
			let hero = new Assassin('Assassin', 530, 303, 251);
			hero.skill('Ciat..! Serangan tanpa bayangan..');
			return hero;
		}
	}

	static acak() {
		return SummonHero.getRandomIntInclusive(1,100);
	}

	static getRandomIntInclusive(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
	  	return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
	}
}


let hero = SummonHero.panggil()
console.log(hero)
//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//Mage {name: Assassin, health: 1130, mana: 603, defense: 231}

console.log(hero.skill());


//output yang diharapkan (output akan random jadi tidak perlu sesuai dengan contoh ini)
//‘Assassin mengeluarkan skill: Ciat..! Serangan tanpa bayangan..’

module.exports = Hero;