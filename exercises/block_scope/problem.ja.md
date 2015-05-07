`let` , `const` という新しい変数宣言ができるようになりました。これはblockスコープと呼ばれています。これまでのJavaScriptの場合、変数の生存するスコープを表現するのにfunctionで囲む必要がありました。しかし、let/constを使うことで、functionだけではなくブレース`{ ... }`で囲まれた領域がスコープになります。

letは再代入可能な変数ですが、constは再代入不可能な変数です。constはちょうど Java で言うところの final があたったような状態になります。

```javascript
// block.js
{
  var a = 10;
  let b = 20;
  const tmp = a;
  a = b;
  b = tmp;
  // tmp = 30; 再代入はできない SyntaxErrorになる。
}

// a = 20、aはvarで宣言しているのでブロックスコープの外からも参照可能。
console.log(a);
// letで定義したbはブロックスコープの外からは解決できない、ReferenceError b is not defined になる。
console.log(b);
// constもスコープの中でのみ有効、tmp is not defined
console.log(tmp);
```

let/constをなるべく利用したほうがうかつに変数がスコープの外に漏れてしまう恐れを防ぐことができます。

# 問題

実際に let と const を使って期待の効果を実現してみましょう。

```javascript
'use strict';
// 変数 a はblockスコープの中でも外でも再代入可能な有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください
var|let|const a = 5;

// 変数 b は再代入不可能な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください
var|let|const b = process.argv[2];

if (a === 5) {
  // ここでの変数 c は再代入可能ですが、このblockの中でだけ有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください。
  var|let|const c = 4;
  console.log(c);  // 4

  // ここでの変数 b はblockの中だけで有効な変数です。変数宣言の方法(var|let|const)のいずれを利用するべきか検討してください。
  var|let|const b = 8;
  console.log(b); // 8
} 

console.log(a); // 5
console.log(b);
try {
  // ここで cに対して値を変更してみましょう。
  c = 1000;
} catch (e) {
  // c is not defined エラーが発生することを確認して下さい。
  console.log(e);
}
```
