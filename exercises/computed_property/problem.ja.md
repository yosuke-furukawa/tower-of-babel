ES6から、オブジェクトリテラルの記述方式が少し変わります。オブジェクトのプロパティ"名"に式を評価させることができるようになります。

これまでは、プロパティ名に動的な値を入れる際は下記のようにしていました。

```javascript
var prop = "hoge";

var obj = {};
obj[prop] = "fuga";
```

これが ES6 からはこうなります。

```javascript
var prop = "hoge";
var obj = {
  [prop]: "fuga"
};
```

これを Computed Property と呼びます。

`[]` で囲まれたキーは式を評価させることができるので下記のような事も可能です。

```javascript
var obj = {
  // 関数を作って中で実行する
  [(()=>"hoge" + "fuga")()]: "foo"
};
```

動的にキーが切り替わるような場合でもComputed Propertyをうまく使うことで演算した結果を一時的な変数に持たなくて済みます。

# 問題

以下のオブジェクトを Computed Property を使って書き換えてみましょう。

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```

可能であれば、一時変数を全く使わずに表現してみてください。
