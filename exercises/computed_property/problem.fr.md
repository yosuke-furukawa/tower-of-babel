En ES6, la façon d'utiliser et de définir un objet standard a été amélioré. Il est maintenant possible d'utiliser une expression comme nom de propriété.

Avant, lorsque vous vouliez définir une propriété dynamique sur un objet, vous deviez faire comme ceci :

```javascript
var prop = "foo";

var obj = {};
obj[prop] = "bar";
```

En ES6, cela peut être écrit comme ceci :

```javascript
var prop = "foo";
var obj = {
  [prop]: "bar"
};
```

Cette technique est appelée `Propriété Calculée` (`Computed Property`).

Le contenu de `[]` peut également être une fonction :

```javascript
var obj = {
  // en utilisant une fonction inline
  [(()=>"bar" + "baz")()]: "foo"
};
```

Dans ce cas la clef est la chaîne retournée par la fonction. Avec la syntaxe des `Propriétés Calculées`, vous pouvez définir dynamiquement des propriétés sans utiliser de variables temporaires.

# Exercice

Récrivez le code suivant en utilisant la méthode des `Propriétés Calculées` :

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```

Essayez de résoudre l'exercice sans déclarer de variable temporaire.
