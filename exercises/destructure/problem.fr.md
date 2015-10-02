Cette nouvelle syntaxe est similaire à la déstructuration dans Clojure. Elle rend plus facile l'accès à certaines propriétés d'un tableau ou d'un objet.

Examinons en détail cette syntaxe avec un petit exemple. L'exemple le plus commun est l'interversion de deux variables.

```javascript
var foo = 123;
var bar = 456;

// interversion de la valeur des variables
var tmp = foo;
foo = bar;
bar = tmp;
```

Avec la déstructuration cela devient bien plus facile.

```javascript
var foo = 123;
var bar = 456;

// interversion de la valeur des variables
var [bar, foo] = [foo, bar];
```

Il est même possible d'accéder à des éléments enfants d'un tableau.

```javascript
var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c);// hello, world
// la valeur de `a` est "hello", celle de `b` est ", " et celle de `c` est "world"
```

Il est aussi possible d'utiliser cette syntaxe pour accéder aux propriétés d'objets :

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# Exercice

Utilisez la déstructuration pour extraire `name.family` et `birth.day` dans l'objet Javascript suivant :

```javascript
var json = {
  "name": {
    "first": "Yosuke",
    "family": process.argv[2]
  },
  "birth": {
    "year": 1982,
    "month": 12,
    "day": process.argv[3]
  }
};

// Insérez votre code ici.

console.log(familyName);
console.log(birthDay);
```
