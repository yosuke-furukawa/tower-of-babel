
# Introduction
Ceci est le premier exercice afin de découvrir ES6 en utilisant babel.

Même en utilisant la puissance de la toute dernière version de node.js, il n'est pas encore possible d'utiliser toutes les fonctionnalités d'ES6.

Pour utiliser cette nouvelle grammaire, il existe un package additionnel appelé `babel` que vous pouvez installer de la manière suivante :

```shell
$ npm install babel-cli -g
```

Une fois ceci fait, deux nouvelles commandes deviennent accessibles : `babel` et `babel-node`.
Commençons en utilisant `babel-node`.

Créez un fichier `program.js` contenant ceci :

```javascript
console.log(`Hello Babel`);
```

Une fois le fichier sauvegardé, vous pourrez lancer le programme de cette façon :

```shell
$ babel-node program.js
```

Essayez de le faire tourner et assurez-vous qu'il affiche `Hello Babel`.

# Exercice
Créez un programme javascript prenant en argument le premier paramètre passé en ligne de commande et qui l'affiche juste après une chaine `"Hello "` en utilisant la syntaxe des templates de chaînes ES6.

# Astuces
Il est possible de passer des paramètres en ligne de commande à un programme babel comme ceci :

```
babel-node my-program.js an-argument
```

Pour accéder aux arguments, vous pouvez utiliser le tableau `process.argv`.

**Important !** Le tableau `process.argv` ne contient pas uniquement les arguments mais également l'exécutable (en première position) et le fichier chargé (en seconde position) !
Cela signifie que le premier argument est stocké en troisième position :

```javascript
process.argv[2]
```

Les templates de chaînes ES6 sont une nouvelle façon de déclarer des chaines en utilisant le caractère `\``. Dans les templates de chaînes, vous pouvez accéder au variables locales de cette façon :

```javascript
var a = 1;
console.log(`${a}`);
```

Vous pouvez trouver plus d'informations sur les templates de chaînes ici : http://updates.html5rocks.com/2015/01/ES6-Template-Strings
