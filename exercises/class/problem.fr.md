# Introduction
Lorsque vous commencez à écrire des structures ressemblant à des classes en Javascript pré-ES6, vous devez utiliser la propriété `prototype` des fonctions de la manière suivante :

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

Cette façon d'écrire une classe n'est pas incommode mais elle a néanmoins quelques désavantages : vous devez ajouter `prototype` à chaque définition de méthode et la `function` initiale fait également office de constructeur.
Vous devez connaître ces petits trucs pour pouvoir utiliser correctement les classes. ES6 ajoute une nouvelle syntaxe pour définir une classe.

La même classe que précédemment mais écrite en syntaxe ES6 ressemblerait à ceci :

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

# Exercice

Ecrivez la classe suivante en utilisant la syntaxe ES6 de définition d'une classe :

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
  return "x: " + this.x + " y: " + this.y + " health: " + this.getHealth();
};
```

et utilisez cette classe de la manière suivante :

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```
