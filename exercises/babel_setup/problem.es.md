
# Introducción
Este es el primer ejercicio para aprender ES6 con Babel

A pesar de la potencia de la última versión de node.js, todavía no podemos usar todas las novedades que incorpora ES6.

Para poder hacerlo, necesitamos instalar un paquete adicional llamado `babel` haciendo lo siguiente:

```shell
$ npm install babel-cli -g
```

Una vez instalado, tendrás disponibles dos nuevos comandos: `babel` y `babel-node`.
Empezaremos usando `babel-node`.

Crea un archivo llamado `program.js` que contenga:

```javascript
console.log(`Hello Babel`);
```
Una vez guardado, podrás ejecutarlo de la siguiente forma:

```shell
$ babel-node program.js
```
Prueba de ejecutarlo y asegúrate de que muestra `Hello Babel`.

# Ejercicio

Crea una aplicación javascript que obtenga el primer argumento de la línea de comandos y lo muestre justo después del *string* `"Hello "` usando las plantillas de ES6.

# Nota
Puedes pasarle argumentos de línea de comandos a una aplicación babel así:

```
babel-node my-program.js an-argument
```
Para acceder a los argumentos puedes usar el array `process.argv`.

**Importante!** El array `process.argv` no contiene únicamente los argumentos sino que además los del tiempo de ejecución (situado en la primera variable) y el script del archivo cargado (situado en la segunda)!

Esto significa que el primer argumento se almacena en la tercera posición.

```javascript
process.argv[2]
```

Las plantillas de ES6 son una nueva manera de declarar strings utilizando el caracter `\``. En este tipo de plantillas puedes acceder a variables locales así:

```javascript
var a = 1;
console.log(`${a}`);
```
Puedes obtener más información sobre plantillas ES6 [aquí](http://updates.html5rocks.com/2015/01/ES6-Template-Strings)
