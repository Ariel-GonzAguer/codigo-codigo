# 1. Control de flujo

**1.1** Convertir un if...else a operador ternario:

```js
function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
```

**1.2** Escribir un bucle `for` que imprima todos los números impares del 1 al 20.

**1.3** Convertir este bucle `while` a un bucle `for`:

```js
let i = 0;
while (i < 10) {
  console.log(i * 2);
  i++;
}
```

**1.4** ¿Qué imprimirá este código y por qué?

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  if (i === 4) {
    break;
  }
  console.log(i);
}
```

# 2. Operadores

**2.1** ¿Cuál es la diferencia entre `==` y `===`? Dar ejemplos donde den resultados diferentes.

**2.2** Evaluar estas expresiones sin ejecutar código:

- `10 % 3`
- `2 ** 4`
- `'5' === 5`
- `'5' == 5`
- `!true`
- `true && false`
- `true || false`

**2.3** Escribir una función que reciba la edad de una persona y retorne `true` si puede votar (mayor o igual a 18 años) Y tiene documento de identidad (booleano), usando operadores lógicos.

**2.4** Simplificar esta expresión usando operadores de asignación:

```js
let puntos = 100;
puntos = puntos + 50;
puntos = puntos * 2;
puntos = puntos - 25;
```

# 3. Arrays (Arreglos)

**3.1** Escribir una función que reciba un array de números y retorne la suma de todos sus elementos usando un bucle `for`.

**3.2** Convertir este bucle `for` tradicional a un `for...of`:

```js
let animales = ['perro', 'gato', 'pájaro'];
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}
```

**3.3** Usar `.map()` para crear un nuevo array donde cada número esté multiplicado por 3:

```js
let numeros = [2, 4, 6, 8];
// Tu código aquí
```

**3.4** Usar `.filter()` para obtener solo las palabras que tienen más de 5 letras:

```js
let palabras = ['casa', 'programación', 'sol', 'computadora', 'web'];
// Tu código aquí
```

**3.5** Usar `.reduce()` para encontrar el número más grande en un array:

```js
let numeros = [3, 7, 2, 9, 1, 5];
// Tu código aquí
```

**3.6** ¿Qué retorna cada una de estas expresiones?

```js
let edades = [15, 22, 17, 30, 16];
// edades.some(edad => edad >= 18)
// edades.every(edad => edad >= 18)
```

# 4. Strings (Cadenas de texto)

**4.1** Escribir una función que reciba un nombre y retorne "Hola, [nombre]!" en mayúsculas.

**4.2** Contar cuántas veces aparece la letra 'a' en la palabra "programación" usando un bucle.

**4.3** Usar métodos de string para resolver:

- **4.3.1** Verificar si la palabra "JavaScript" contiene "Script"
- **4.3.2** Obtener las primeras 4 letras de "desarrollo"
- **4.3.3** Convertir "HOLA mundo" a minúsculas

**4.4** Crear una función que reciba una frase y retorne un array con cada palabra:

```js
// Ejemplo: "Me gusta programar" → ["Me", "gusta", "programar"]
```

**4.5** Escribir una función que tome un array de palabras y las una con guiones:

```js
// Ejemplo: ["hola", "mundo", "cruel"] → "hola-mundo-cruel"
```

**4.6** Crear una función que determine si una palabra es un palíndromo (se lee igual al revés).

# 5. Funciones

**5.1** Convertir esta función normal a función flecha:

```js
function calcularArea(base, altura) {
  return (base * altura) / 2;
}
```

**5.2** Reescribir esta función para que use parámetros por defecto:

```js
function saludar(nombre, saludo) {
  if (saludo === undefined) {
    saludo = 'Hola';
  }
  return saludo + ', ' + nombre + '!';
}
```

**5.3** Escribir una función recursiva que calcule la suma de números del 1 al n:

```js
// Ejemplo: sumaHasta(4) debería retornar 1 + 2 + 3 + 4 = 10
```

**5.4** ¿Qué problema tiene esta función recursiva y cómo lo solucionarías?

```js
function contar(n) {
  console.log(n);
  return contar(n + 1);
}
```

**5.5** Crear una función que reciba dos números y una función de operación, y retorne el resultado:

```js
// Ejemplo: calcular(5, 3, (a, b) => a + b) → 8
//          calcular(5, 3, (a, b) => a * b) → 15
```

# 6. Algoritmos (pensar en pasos)

**6.1** **Ejercicio de análisis**: Lee este problema y escribe el pseudocódigo (sin programar aún):

> "Crear una función que reciba un array de nombres y retorne el nombre más largo. Si hay empate, retornar el primero que aparece."

**6.2** **Dividir en pasos**: Para el problema "encontrar todos los números pares en un array y retornarlos ordenados de mayor a menor", escribir los pasos en pseudocódigo.

**6.3** **Casos límite**: Para una función que encuentra el promedio de números en un array, ¿qué casos límite deberías considerar?

**6.4** **Traducir a código**: Implementar este pseudocódigo:

```
1. Crear una variable contador = 0
2. Recorrer cada carácter de la palabra
3. Si el carácter es una vocal (a, e, i, o, u), incrementar contador
4. Retornar contador
```

**6.5** **Optimización**: ¿Cómo mejorarías este algoritmo que busca si un número existe en un array?

```js
function existeNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      return true;
    }
  }
  return false;
}
```

**6.6** **Problema completo**: Crear una función que reciba un array de objetos representando estudiantes `{nombre: "Ana", edad: 20, calificacion: 85}` y retorne:

1. El estudiante con la calificación más alta
2. El promedio de edad de todos los estudiantes
3. Un array con los nombres de estudiantes que tienen calificación >= 80
