ES6から、アロー関数が仕様として追加されました。
このアロー関数を使うと無名関数を短く記述することが可能です。

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```

今までは上記のように記述していましたが、これからは、下記のように記述できます。

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {} で関数定義になる
// 今までだと var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// 引数が一つならカッコを省略できるし、returnの一行しかbodyがないならreturnも省略可能
var square2 = x => x * x;
console.log(square2(4)); //16
```

# 問題

コマンドライン引数から任意の数の文字列を受け取り、最初の一文字だけを取得して、結合するための関数を作ってみましょう。

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* ここにアロー関数を使って一文字だけ取得しましょう */)
                   .reduce(/* ここにアロー関数を使って文字列結合しましょう */);
console.log(result);
```

例えば、 ["Hello", "Arrow", "Function"] の場合、結果として "HAF" という文字列が得られれます。

```shell
$ babel-node program.js Hi this is yosuke 
Htiy
```
