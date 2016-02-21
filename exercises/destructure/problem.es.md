Esta nueva sintaxis es similar al desestructurado de Clojure. Facilita el acceso a las propiedades de Arrays y Objetos.

Vamos a examinar la sintaxis con un ejemplo: El más común es el de intercambiar el valor de dos variables:

```javascript
var foo = 123;
var bar = 456;

// intercambio de valor de las variables
var tmp = foo;
foo = bar;
bar = tmp;
```
Con el desestructurado resulta así de fácil:

```javascript
var foo = 123;
var bar = 456;

// intercambio de valor de las variables
[bar, foo] = [foo, bar];
```
Podemos incluso acceder a elementos que son hijos de un Array.

```javascript
var [a, [b], [c]] = ['hello', [', '], ['world']];

console.log(a + b + c);// hello, world
// el valor de a es "hello", b es ", " y c es "world"
```
También podemos usarlo para acceder a las propiedades de los objetos.

```javascript
var pt = {x: 123, y: 444};
var {x, y} = pt;
console.log(x, y); // 123 444
```

# Ejercicio

Utiliza la desestructuración para extraer `name.family` y `birth.day` del siguiente Objeto javascript:

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

// Your code here.

console.log(familyName);
console.log(birthDay);
```
