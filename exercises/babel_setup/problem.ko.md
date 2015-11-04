이제부터 ES6 연습 문제를 시작하겠습니다.
ES6의 구문은 현시점에서 node.js를 사용해도 모든 기능을 사용할 수는 없습니다.

여기에, 일단 ES6의 문법을 사용하기 위해, `babel` 바벨을 설치합니다.

```shell
$ npm install babel-cli -g
```

이렇게 하면, `babel`과 `babel-node`의 두 개의 커맨드를 사용할 수 있습니다.
일단 `babel-node`를 사용해 봅시다.

밑의 파일을 `program.js`라는 이름으로 저장해 주세요.

```javascript
console.log(`Hello Babel`);
```

저장했으면

```shell
$ babel-node program.js
```

로 실행해 결과를 확인해 주세요.

# 문제

커맨드 라인 인수를 받아, Hello의 뒤에 붙이는 밑의 프로그램을 작성해 주세요.

```javascript
var arg = process.argv[2];
console.log(`Hello ${arg}`);
```

`babel-node program.js babel`을 실행해 결과를 확인해 보세요.
실행이 끝나면 `tower-of-babel verify program.js` 하세요.
