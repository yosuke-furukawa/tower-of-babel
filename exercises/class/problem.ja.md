JavaScriptでクラスライクなものを作るときは、コンストラクタとして関数を定義し、prototypeに対してメソッドを定義することで実現してきました。

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

一方で、この書き方はそこまで直感的とは言えず、この書き方を行う際には `prototype` に関する知識やコンストラクタを `function` として定義する事が可能である事を知っておく必要があります。 ES6 からはこのクラスを定義するための糖衣構文が追加されました。

上のJavaScriptをES6のクラスを使って変更すると下記のようになります。

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

# 問題

下記のクラスを ES6 の class 構文を使って書き換えてみましょう。

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

書き換えたら、記述したクラスの末尾に対して、下記の操作を追記してください。

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```


