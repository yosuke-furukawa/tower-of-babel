# Introduction
When you wanted to write class-like structures in JavaScript before ES6, you had to use the `prototype` property of functions like this:

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

This way of writing a class is not entirely impractical but it has
several shortcomings: You need to add `prototype` for every method
definition and the defining `function` doubles as the type's constructor
You need to know these "tricks" to deal with classes properly. ES6 adds a new syntax to define a class.

The same class as before written with the new ES6 syntax would look like this:

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

# Exercise

Rewrite the following class in the new ES6 class syntax:

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

and then use the class like this:

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```
