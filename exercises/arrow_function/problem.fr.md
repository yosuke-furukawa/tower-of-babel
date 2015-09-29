Avec ES6, il est possible de déclarer une fonction avec une flèche. De cette manière, il est possible d'écrire des déclarations en quelques caractères pour les fonctions les plus simples.

```javascript
setTimeout(function(){
  console.log('Test');
}, 100);

```

La même chose peut être écrit de la manière suivante :

```javascript
setTimeout(()=>{console.log('Test');}, 100);
```

```javascript
// (x) => {} devient une fonction
// La déclaration suivante aurait dû être écrire de la manière suivante sans ES6 : var square = function(x) { return x * x; };
var square = (x) => {
  return x * x;
};
console.log(square(4)); //16

// Sans les accolades, il est même possible de ne pas mettre le `return`
var square2 = x => x * x;
console.log(square2(4)); //16
```

# Exercice

Analysez les variables passées en argument via `process.argv` et affichez la première lettre de chaque mot sur une seule ligne.

```javascript
var inputs = process.argv.slice(2);
var result = inputs.map(/* Insérez votre code ici, avec une déclaration via une flèche */)
                   .reduce(/* Insérez votre code ici, avec une déclaration via une flèche */);
console.log(result);
```

Par exemple, dans le cas ["Hello", "Arrow", "Function"], on doit afficher "HAF".
Voici un exemple d'appel :

```shell
$ babel-node program.js Hi this is yosuke
Htiy
```
