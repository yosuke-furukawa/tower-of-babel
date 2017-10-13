# Вступ

Тепер, коли ми можемо створювати та використовувати класи, давайте подивимося, як ми можемо створювати класи, які спираються на існуючу функціональність.

Візьміть для прикладу наступний клас:

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

клас персонажа можна побудувати так:

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

У цьому прикладі ключове слово `extends` дозволяє класу `Monster` успадкувати (використати повторно) методи, оголошені в класі `Character`. Використання цього синтаксису дає додаткову можливість - використовувати `super`. `super` дозволяє вказати, чи повинна використовуватися функція, з поточного класу, чи з класу який він успадковує, - «суперкласс».

# Проблема

Перепишіть класи `prototype` та `util.inherit`, написані нижче, за новим синтаксисом ES6.

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

Коли створите файл, використайте його, щоб нанести ураження, і виведіть результат в консоль, як от:

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
