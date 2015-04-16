前回の通り、for-of文を作ると、任意のIterableなオブジェクトを繰り返すことが可能です。ただし、記述してもらって分かる通り、 Iterable なオブジェクトを作るのに多少工夫が必要でした。今回はこのIterableなオブジェクトを作りやすくするための `generator` の扱いを覚えましょう。

generatorを使った時のfibonacciは以下のようになります。

```javascript
let fibonacci = function*(){
  let currentValue = 0, nextValue = 1;
  while (currentValue < 1000) {
    // ここでdestructuringで値をswapさせる。
    [currentValue, nextValue] = [nextValue, currentValue + nextValue];
    // yieldで値を返す
    yield currentValue;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
```

先ほどとの違いは何でしょうか。 関数に `function*` が入っています。また、`return` を使っている所が `yield` に変わっています。

# 問題

ではここで、先ほど作成した FizzBuzz 問題を generator で書き換えてみましょう。

