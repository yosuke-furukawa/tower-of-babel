Class가 존재하므로 상속도 존재합니다. 이번엔 상속을 이용해 클래스를 만들어 봅시다.

```javascript
// Character 클래스
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

// Character는 Monster 클래스를 상속
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```

기본적으로 `extends` 키워드로 상속합니다. 상속한 클래스는 부모 클래스의 기능을 사용할 수 있습니다.
부모 클래스가 가진 메소드나 맴버를 자식 클래스에서 부른 경우, `super`라는 키워드를 사용합니다.

```javascript
// Character는 Monster 클래스를 상속
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  attack(character) {
    // super로 부모 클래스의 attack을 그대로 부름
    super.attack(character);
    character.health_ -= 5;
  }
}
```

# 문제

밑에 있는 prototype과 util.inherit로 적힌 클래스를 ES6의 class 구문을 사용하도록 바꾸어 봅시다.

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

바꾸셨으면, 클래스 밑에 아래에 있는 코드를 추가하세요.

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


