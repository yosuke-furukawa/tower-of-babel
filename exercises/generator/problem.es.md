En el último ejercicio hemos utilizado `Iterables` para generar bucles. Para crearlos nos ha costado bastante esfuerzo. Con la nueva sintaxis basada en el `generador` podremos hacer lo mismo pero de manera más sencilla.

Aquí tenemos un ejemplo con la sintaxis de generador:

```javascript
let fibonacci = function*(){
  let pre = 0, cur = 1;
  while (pre < 1000) {
    // Aquí desestructuramos el primer estado:
    [pre, cur] = [cur, pre + cur];
    // y retornamos cada paso meniante yield
    yield pre;
  }
}();

for (var n of fibonacci) {
  console.log(n);
}
```
Aquí la principal diferencia está en la notación de `function*` y en que utilizamos `yield` en lugar de `return`

# Ejercicio

Crea el mismo algoritmo FizzBuzz tal y como se explica en el último ejercicio pero esta vez utilizando la nueva sintaxis de `generador`.