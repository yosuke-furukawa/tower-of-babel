ES6から、新しく `for of` という文法が追加されました。これは繰り返しをおこなう `for` 文の拡張です。以下の様な記述を行います。

```javascript
var res = [];
// ここが for of 文
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

これまでの for 文と何が違うのでしょうか。これまでの for in 文と異なり、 of に渡すのはコレクションに限りません。
繰り返し可能なもの、Iterable なものであれば for of 文で繰り返すことができます。

Iterable なものを作るには、 `Symbol.Iterator` を使います。 `Symbol.Iterator` の定義は下記の通り。

```javascript
// 1000までの値を返すfibonacciを作る
var fibonacci = {
  // Symbol.iteratorメソッドを持つオブジェクトにする
  [Symbol.iterator]() {
    let currentValue = 0, nextValue = 1;
    // iteratorオブジェクトは nextメソッドを持つオブジェクトを返す
    return {
      next() {
        // nextの中では返す値(value)と次で終わりかどうかを示すプロパティ(done)を返す
        if (nextValue > 1000) return { done: true };
        [currentValue, nextValue] = [nextValue, currentValue + nextValue];
        return { done: false, value: currentValue };
      }
    }
  }
}

for (var n of fibonacci) {
  console.log(n);
}
```

# 問題

ではここで、 Iterable なオブジェクトを作成し、for-ofループで回してみましょう。1から始まり、コマンドライン引数に受け取った数までカウントするFizzBuzz 問題を作って for-of ループで回しましょう。

# ヒント

## FizzBuzz問題

1からXまでの数をプリントするプログラムを書け。ただし3の倍数のときは数の代わりに「Fizz」と、5の倍数のときは「Buzz」とプリントし、3と5両方の倍数の場合には「FizzBuzz」とプリントすること。

FizzBuzzは下記のように作ります。

```javascript
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // ここに FizzBuzzの計算を書く
    // ヒント：
    // 計算を継続させたい時、つまり終了条件である繰り返し回数が max を超えていない時は
    // done: false のオブジェクトを返却する。
    // 逆に終了条件をみたすときには done: true のオブジェクトを返却する。
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}

```
