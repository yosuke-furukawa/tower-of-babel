# Introducción

Ahora que ya hemos aprendido a crear y utilizar clases, veamos como crear clases que se construyan sobre funcionalidades existentes.

En el siguiente ejemplo:

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
sería posible construir una clase así:

```javascript
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```
En este ejemplo, la palabra clave `extends` permite a `Monster` heredar (construir en base a, reutilizar) los métodos definidos en `Character`. Utilizando esta sintaxis podemos usar `super`. De esta manera podemos especificar si tenemos que usar la función definida en esta clase o la clase de la cual ha sido extendida; la "super-clase".

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

# Problema

Refactoriza las clases de abajo escritas utilizando el modo `prototype` y `util.inherit` en la nueva sintaxis ES6.

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
Cuando tengas el archivo creado úsalo para crear algo de "daño" y envía el resultado a la consola así:

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
