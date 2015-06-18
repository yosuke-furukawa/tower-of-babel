# Introduction

Now that we are able to create and use classes, lets look at how we can create classes that build on existing functionality.

Take this class for example:

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

it is possible to build on the character class like this:

```javascript
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```

In this example, the `extends` keyword lets `Monster` inherit(build on, reuse) the methods defined in `Character`. When you use this syntax it is also possible to use `super`. `super` allows to specify whether the function defined in this class should be used or the class it extends from, the "super-class".

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

# Problem

Rewrite the classes that are written below in the `prototype` and `util.inherit` fashion with the new ES6 syntax.

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

When you have the file created, use it to make some damage and write the result to the console like this:

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
