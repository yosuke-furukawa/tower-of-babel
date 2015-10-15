# Introduzione

Adesso che possiamo creare e usare le classi, vediamo come è possibile creare classi che riutilizzano funzionalità esistente.

Prediamo questa classe come esempio:

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

è possibile costruire a partire dalla classe `Character` come segue:

```javascript
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```

In questo esempio, la parola chiave `extends` permette a `Monster` di ereditare (riutilizzare, basarsi su) i metodi definiti in `Character`. Quando usi questa sintassi puoi anche usare la parola chiave `super`. `super` ti permette di specificare se vada usata la funzione definita in questa classe, oppure la classe che viene da essa estesa, chiamata "superclasse".

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

# Esercizio

Riscrivi le classi scritte di seguito tramite `prototype` e `util.inherit` usando la nuova sintassi ES6.

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
  return "x: " + this.x + " y: " + this.y + " salute: " + this.getHealth();
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
  return "nome: " + this.name + " " + Player.super_.prototype.toString.call(this);
};

```

Non appena hai creato il file, usalo per arrecare del danno al personaggio e scrivi il risultato sulla console come segue:

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
