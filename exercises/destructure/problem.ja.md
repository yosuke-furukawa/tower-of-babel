デストラクチャリング、和訳すると分配束縛と呼ばれる機能です。Clojureに存在する機能で、これを利用すると配列やオブジェクトで設定した値を取り出しやすくなります。

試しに一つ例を出しましょう。値をswapするのに今までは、一時変数に入れてから値を交換していました。

```javascript
var hoge = 123;
var fuga = 456;

// 値をswapする
var tmp = hoge;
hoge = fuga;
fuga = tmp;
```

デストラクチャリングを使うとこれをもっと簡単に行えるようになります。

```javascript
var hoge = 123;
var fuga = 456;

// 値をswapする
[fuga, hoge] = [hoge, fuga];
```

これだけです、配列に２つの値を入れて左辺で交換するだけで実現できます。

この他にも配列から任意の要素を取得する事もできます。

```javascript
var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c); //hello, world (aに"hello", bに",", cに"world"が入ってる )
```

また、Objectの値を取得するのにも利用可能です。

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# 問題

以下のJSONを デストラクチャリングを使って name.family と birth.day を取得してみましょう。

```javascript
var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};
// ここでデストラクチャリングを使ってname.familyをfamilyNameに。
// birth.day を birthDay に束縛してください。


console.log(familyName);
console.log(birthDay);
```
