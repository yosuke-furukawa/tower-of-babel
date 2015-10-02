可変長のパラメータを受け取る関数を実現する場合、これまでは `arguments` と呼ばれる配列ライクなオブジェクトを扱うことで実現されていました。しかし、 `arguments` は配列ライクなオブジェクトではありますが、配列ではありません。つまり、配列のメソッドである、reduceやmapのようなメソッドは使えませんでした。 


ES6からはこの `arguments` を使わなくても引数に `...` を付けることで可変長パラメータの処理を実現できます。この機能をRestパラメータと呼びます。Restパラメータを使うことで、配列ライクなオブジェクトではない配列として可変長パラメータを受け取ることが可能です。

```javascript
var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

console.log(sum(1,2,3)); // 6
```

また関数呼び出しの際に配列のオブジェクトを可変長パラメータに変換することも可能です。これを Spread コールと呼びます。

```javascript

var sum = function(...args){
  return args.reduce( (sum, n) => sum + n );
};

var array = [1, 2, 3, 4];
// 配列から sum(1,2,3,4) で呼び出すのと同じ
console.log(sum(...array)); // 10

```

# 問題

JavaScript でこの可変長パラメータである Rest パラメータ呼び出しを使って、平均を取る関数を作ってみましょう。

```javascript
var args = process.argv[2].split(",");
args = args.map((arg)=> +arg);

// ここに平均を取るavg関数を作る、作る際には
// RESTパラメータを利用すること。

console.log(avg(...args));
```
