Classが存在するという事は継承も存在します。この回では継承を扱ってクラスを作ってみましょう。

```javascript
// Characterクラス
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

// CharacterをMonsterクラスに継承
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
}
```

基本的に、 `extends` キーワードで継承します。継承されたクラスは親クラスの機能を引き継ぎます。
親クラスの持つメソッドやメンバーを子クラスから呼び出す場合、 `super` というキーワードを利用します。

```javascript
// CharacterをMonsterクラスに継承
class Monster extends Character {
  constructor(x, y, name) {
    super(x, y);
    this.name = name;
  }
  attack(character) {
    // super で親クラスのattackをそのまま呼ぶ
    super.attack(character);
    character.health_ -= 5;
  }
}
```

# 問題

下記のprototypeとutil.inheritで書かれたクラスを ES6 の class 構文を使って書き換えてみましょう。

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

書き換えたら、クラスに対して、下記の操作を追記してください。

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


