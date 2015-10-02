En ES6, la possibilité d'itérer sur un tableau avec `for or` a été ajoutée. Jetons un oeil à un exemple :

```javascript
var res = [];
// La ligne suivante utilise la syntaxe for-of.
for (let element of [1, 2, 3]) {
  res.push(element * element);
}
console.log(res); // [1, 4, 9]
```

Du coup, quelle est la différence avec la syntaxe `for` classique ? Contrairement à `for`, la syntaxe `for of` n'est pas limitée aux tableaux. A partir du moment où quelque chose peut être répété, à partir du moment où c'est `Iterable` alors la syntaxe `for of` peut s'appliquer.

Pour rendre itérable quelque chose, vous devez utilisez `Symbol.Iterator`. Voici un exemple de la façon dont on s'en sert :

```javascript
// Calcul de la suite de Fibonacci jusqu'à la 1000ème valeur
var fibonacci = {
  // Création d'une méthode en utilisant la fonction Symbol.iterator.
  [Symbol.iterator]() {
    let pre = 0, cur = 1;
    // L'objet iterateur doit avoir une méthode next() :
    return {
      next() {
        // Le résultat de next() doit être un objet avec la propriété `done` dont l'état défini si l'itération est terminée ou non.
        [pre, cur] = [cur, pre + cur];
        if (pre < 1000)  return { done: false, value: pre };
        return { done: true };
      }
    }
  }
}

// La propriété contenant la valeur du résultat est `n`
for (var n of fibonacci) {
  console.log(n);
}
```

# Exercice

Créez un objet itérable effectuant la suite FizzBuzz jusqu'à une certaine valeur.

# Astuces

## FizzBuzz

Listez les nombres de 1 jusqu'au max (passé via `process.argv`). Pour chaque nombre divisible par 3 écrivez `Fizz`, pour chaque nombre divisible par `5` écrivez `Buzz` et pour chaque nombre divisible à la fois par 3 et 5 écrivez `FizzBuzz`.

Voici un exemple :

```javascript
const max = process.argv[2];
let FizzBuzz = {
  [Symbol.iterator]() {
    // codez ici la logique de FizzBuzz
    // Astuce :
    // Lorsque l'itération est terminée, vous devez retourner un objet
    // avec la propriété `done: true` mais avec cette ultime étape
    // l'objet doit avoir la propriété `done: false`
  }
}

for (var n of FizzBuzz) {
  console.log(n);
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// 19
// Buzz
// Fizz
// 22
// 23
// Fizz
// Buzz
// 26
// Fizz
// 28
// 29
// FizzBuzz
// ...
}

```
