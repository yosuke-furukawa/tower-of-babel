# Вступ
Якби Ви захотіли написати класоподібні структури в JavaScript до ES6, Вам довелося б робити це за допомогою властивості функцій `prototype`, як от:

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

Цей спосіб написання класу не позбавлений певної практичності, 
але він має кілька недоліків: для кожного оголошення методу потрібно 
додавати `prototype`. І оголошення `function` повторюється як 
конструктор типу. Вам необхідно знати ці "трюки", щоб належним чином 
розібратись в класах. ES6 надає новий синтаксис для оголошення класу.

Аналогічний клас, написаний за новим синтаксисом ES6, буде виглядати так:

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

# Вправа

Переписати наступний клас у новому синтаксисі ES6:

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

а потім використовуйте клас подібним чином:

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```
