これから ES6 に関してのエクササイズを開始します。
ES6の構文は現時点では node.js を使っても全ての機能は使えません。

そこで、一旦 ES6 の文法を有効にするために、 `babel` をインストールします。

```shell
$ npm install @babel/node @babel/core -g
```

こうすると、 `babel` と `babel-node` の２つのコマンドが有効になります。
一旦 `babel-node` を利用してみましょう。

下記のファイルを `program.js` という名前で保存してください。

```javascript
console.log(`Hello Babel`);
```

保存したら、

```shell
$ babel-node program.js
```

と実行し、実行結果を確認して下さい。

# 問題

コマンドライン引数を受け取ってそれを、 Helloの後につける下記の プログラムを作成してください。

```javascript
var arg = process.argv[2];
console.log(`Hello ${arg}`);
```

`babel-node program.js babel` を実行して実行結果を見てみてください。
実行が終わったら、 `tower-of-babel verify program.js`
