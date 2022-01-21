// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack(){
    return this.strength;
  }
  receiveDamage( damage ){
    this.health = this.health - damage;
  }
}

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }
  battleCry(){
    return "Odin Owns You All!";
  }
  receiveDamage( damage ){
    super.receiveDamage( damage );
    
    if ( this.health > 0 ) return `${this.name} has received ${damage} points of damage`;
    if ( this.health <= 0 ) return `${this.name} has died in act of combat`;
    };
 
}

// Saxon
class Saxon extends Soldier{
  
  receiveDamage( damage ){
    super.receiveDamage( damage );
    
    if ( this.health > 0 ) return `A Saxon has received ${damage} points of damage`;
    if ( this.health <= 0 ) return `A Saxon has died in combat`;
    }
    attack(){
      return this.strength;
    }
}

// War
class War {
  constructor(){
  this.vikingArmy = [];
  this.saxonArmy = [];
  }
  addViking(Viking){
    this.vikingArmy.push(Viking);
  }
  addSaxon(Saxon){
    this.saxonArmy.push(Saxon);
  }
  vikingAttack(){
    let pickedviking = saxonArmy[Math.floor(saxonArmy.length * Math.random())];
    pickedviking.receiveDamage( Viking.strength );
  }
  saxonAttack(){

  }
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
