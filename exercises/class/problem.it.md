# Introduzione
Quando volevi scrivere strutture simili a classi in JavaScript prima di ES6, dovevi usare la proprietà `prototype` delle funzioni come segue:

```javascript
var Person = function(name) {
  this.name = name;
};

Person.prototype.getName = function() {
  return this.name;
};

Person.prototype.setName = function(name) {
  this.name = name;
};

var alice = new Person("alice");
alice.getName(); // alice
alice.setName('bob');
alice.getName(); // bob
```

Questa maniera di scrivere una classe non è del tutto impraticabile, ma ha diversi svantaggi: devi aggiungere `prototype` per ogni definizione di metodo e la funzione `function` così definita diventa automaticamente il costruttore del tipo.
Devi conoscere questi "trucchi" per gestire correttamente le classi. ES6 aggiunge una nuova sintassi per definire le classi.

La stessa classe vista prima, scritta con la nuova sintassi ES6, appare come segue:

```javascript
class Person {
  constructor(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}

var alice = new Person("alice");
alice.getName(); // alice
alice.setName('bob');
alice.getName(); // bob
```

# Esercizio

Riscrivi la classe seguente con la nuova sintassi delle classi ES6:

```javascript
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
```

e quindi usa la classe come segue:

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```
