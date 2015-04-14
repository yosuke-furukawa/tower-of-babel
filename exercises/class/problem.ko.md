JavaScript에서 클래스 비슷한 것을 만들 때에는. 생성자 함수를 정의해, 프로토타입에 대해 매소드를 정의하는 것으로 구현해 왔습니다.

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

하지만 이 방법은 그렇게 직관적이라고는 할 수 없고, 이 적는 법을 쓸 때엔 `prototype`에 관한 지식과 생성자를 `function`으로 정의하는 것이 가능하다는 것을 알고 있을 필요가 있습니다. ES6에서 이 클래스를 정의하기 위한 편의 문법이 추가되었습니다.

위의 JavaScript를 ES6의 클래스를 사용해 변경하면 밑의 코드가 됩니다.

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

# 문제

밑의 클래스를 ES6의 class 구문을 사용해 다시 적어보세요.

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

변환하셨으면, 그 클래스의 뒤에 밑의 코드를 추가하세요.

```javascript
var x = process.argv[2];
var y = process.argv[3];
var character = new Character(+x, +y);
character.damage();
console.log(character.toString());
```


