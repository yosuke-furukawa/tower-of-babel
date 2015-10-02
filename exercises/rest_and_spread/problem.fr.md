Avant ES6, si vous aviez à traiter un nombre variable de paramètres vous étiez obligé d'utiliser la variable `arguments` pour traiter les paramètres non-déclarés dans la définition de la fonction. Mais vu que `arguments` n'est pas un véritable tableau, plusieurs méthodes (comme `map` ou `reduce`) ne pouvaient pas être utilisées facilement.

Avec ES6, vous pouvez utiliser `...` à la place de `arguments` pour gérer un nombre variable de paramètres. Avec ça, vous pouvez accéder au reste des paramètres via un tableau et non plus un objet.

```javascript
var sum = function(...args){
  let sum = args.reduce( (sum, n) => sum + n );
  return sum;
};

console.log(sum(1,2,3)); // 6
```

Il est également possible d'appeler une méthode en faisant ce qu'on pourrait nommer un appel de type `spread`, c'est à dire en passant un tableau à la méthode :

```javascript
var sum = function(...args){
  let sum = args.reduce( (sum, n) => sum + n );
  return sum;
};

var array = [1, 2, 3, 4];
// Equivalent à `sum(1, 2, 3, 4)`
console.log(sum(...array)); // 10

```

# Exercice

Calculez la moyenne de tous les nombres passés en ligne de commande en utilisant la syntaxe `...`.

```javascript
var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

// écrivez ici une fonction appelée `avg` qui calcule la moyenne.

console.log(avg(...args));
```
