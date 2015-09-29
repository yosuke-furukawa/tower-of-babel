# Introduction

Maintenant que nous sommes capables de créer et d'utiliser des classes, jetons un oeil à la manière de créer des classes basées sur une fonctionnalité déjà existante.

Prenons cette classe comme exemple :

```javascript
class Character {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.health_ = 100;
  }
  attack(character) {
    if (!(character instanceof Character)) throw new Error('');
    character.health_ -= 10;
  }
}
```

Il est possible de créer une nouvelle classe qui étend cette classe de la manière suivante :

```javascript
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```

Dans cet exemple, le mot-clef `extends` fait en sorte que `Monster` hérite ("se base sur" ou encore "réutilise") les méthodes définies dans `Character`. Quand vous utilisez cette syntaxe, il est également possible d'utiliser `super`. `super` référence la classe parent (ou "super-classe") et permet donc d'appeler explicitement une méthode de la classe parent.

```javascript
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  attack(character) {
    super.attack(character);
    character.health_ -= 5;
  }
}
```

# Exercice

Récrivez la classe plus bas, écrite avec `prototype` et `util.inherit`, en utilisant la nouvelle syntaxe ES6.

```javascript
var util = require('util');
var Character = function(x, y) {
  this.x = x;
  this.y = y;
  this.health_ = 100;
};

Character.prototype.damage = function() {
  this.health_ = this.health_ - 10;
};

Character.prototype.getHealth = function() {
  return this.health_;
};

Character.prototype.toString = function() {
  return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
};

var Player = function(x, y, name) {
  Character.call(this, x, y);
  this.name = name;
};

util.inherits(Player, Character);

Player.prototype.move = function(dx, dy){
  this.x += dx;
  this.y += dy;
};

Player.prototype.toString = function() {
  return "name: " + this.name + " " + Player.super_.prototype.toString.call(this);
};

```

Une fois que vous avez créé ce fichier, utilisez-le pour faire des dégats sur un personnage et afficher le résultat dans la console de cette façon :

```javascript
var x = process.argv[2];
var y = process.argv[3];
var name = process.argv[4];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
var player = new Player(+x, +y, name);
player.damage();
player.move(7, 8);
console.log(player.toString());
```
