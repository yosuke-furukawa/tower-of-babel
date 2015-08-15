# Introducción
Anteriormente a ES6, cuando queríamos escribir una estructura del tipo *clase* en javascript había que utilizar `prototype` como en el código siguiente:

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
Aunque esta forma de escribir una clase no del todo incorrecta tiene algunas desventajas:
Necesitas añadir `prototype` a la definición de cada método y la función definida se dobla con el constructor. Necesitas saber estos "trucos" para poder crear clases de forma adecuada. ES6 añade una nueva sintaxis para definir una clase.

La misma clase escrita anteriorment en la nueva sintaxis ES6 quedaría así:

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

# Ejercicio

Refactoriza la siguiente clase utilizando la nueva sintaxis ES6:

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
...y a continuación utiliza la clase así:

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```
