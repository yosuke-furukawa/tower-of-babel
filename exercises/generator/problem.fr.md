Dans le dernier exercice, vous avez utilisé `Iterable` pour générer des boucles. Mais un objet Iterable nécessite pas mal d'efforts pour être mis en place. Avec la nouvelle syntaxe des `generator`, il est possible de faire la même chose plus simplement.

Voici un exemple de syntaxe de generator :

```javascript
let fibonacci = function*(){
  let pre = 0, cur = 1;
  while (pre < 1000) {
    // Ici nous décomposons l'ancien état
    [pre, cur] = [cur, pre + cur];
    // et on retourne chaque étape via `yield`
    yield pre;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
```

La différence avec l'autre méthode c'est la notation `function*` et l'utilisation de `yield` là où on a pour habitude de voir `return`.

# Exercice

Créez le même algorithme FizzBuzz que dans l'exercice précédent mais cette fois-ci en utilisant la syntaxe des `generator`.
