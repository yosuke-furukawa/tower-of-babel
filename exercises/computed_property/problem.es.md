La forma de acceder y definir los objetos literales en ES6 han sido mejorados. Ahora es posible usar expresiones como nombres de propiedad.

Antes, había que definir las propiedades dinámicas de los objetos así:

```javascript
var prop = "foo";

var obj = {};
obj[prop] = "bar";
```
Ahora en la nueva sintaxis ES6:

```javascript
var prop = "foo";
var obj = {
  [prop]: "bar"
};
```
Esto se conoce como `Propiedad computada`.
El contenido de `[]` también puede ser un función:

```javascript
var obj = {
  // using an inline function
  [(()=>"bar" + "baz")()]: "foo"
};
```
En este caso la clave es la cadena de texto que retorna función. Con la nueva sintaxis de `Propiedad Computada` podemos evaluar propiedades dinámicas sin necesidad de usar variables temporales.

# Ejercicio

Refactoriza el código siguiente mediante el método de `Propiedad Computada`.

```javascript
var evenOrOdd = +process.argv[2];
var evenOrOddKey = evenOrOdd % 2 === 0 ? "even" : "odd";
var sum = +process.argv[3] + evenOrOdd;
var obj = {};
obj[evenOrOddKey] = evenOrOdd;
obj[sum] = sum;
console.log(obj);
```
Prueba de hacerlo sin ninguna variable temporal.