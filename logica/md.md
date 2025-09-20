# 0. Lógica de programación

La lógica de programación es el conjunto de reglas, razonamientos y estructuras que permiten resolver problemas mediante instrucciones que una computadora puede entender y ejecutar.  
Es la base para crear algoritmos: secuencias ordenadas de pasos que transforman datos de entrada en resultados deseados.

En otras palabras, la lógica de programación nos ayuda a pensar de manera estructurada y clara para que podamos comunicarle a la computadora qué hacer en diferentes situaciones.

Se puede expresar en cualquier lenguaje de programación, pues los conceptos son universales.

## Algunos beneficios de practicarla

- Mejora la capacidad de resolver problemas.
- Facilita el aprendizaje de nuevos lenguajes de programación.
- Ayuda a escribir código más limpio y eficiente.
- Fomenta el pensamiento crítico y analítico.
- Reduce errores y facilita el debugging: un razonamiento claro evita suposiciones implícitas que suelen causar bugs difíciles.

# 1. Control de flujo

El control de flujo es la base de la programación. Nos permite decidir qué bloques de código se ejecutan y cuántas veces lo hacen.

## Condicionales: if, else if, else

Las sentencias condicionales evalúan una condición booleana (`true` o `false`) y ejecutan un bloque de código si la condición es verdadera.

- `if`: Se ejecuta solo si la condición es `true`.
- `else if`: Se evalúa si la condición del `if` anterior fue `false`. Puedes tener múltiples `else if`.
- `else`: Se ejecuta si ninguna de las condiciones anteriores fue `true`.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de condicionales
let edad = 17;

if (edad >= 18) {
  console.log('Puedes votar y tramitar tu licencia.');
} else if (edad >= 16) {
  console.log('Puedes tramitar tu licencia de conducir con un adulto.');
} else {
  console.log('Eres menor de edad. No puedes tramitar tu licencia.');
}
```

## Operador ternario: condición ? valorSiTrue : valorSiFalse

Este es un atajo para una sentencia `if/else` simple. Es ideal para asignar un valor a una variable basándose en una condición.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de operador ternario
let tieneDinero = true;
let resultado = tieneDinero ? 'Puedes comprar el helado.' : 'No puedes comprar el helado.';
console.log(resultado);
```

## Bucles: for, while, do...while

Los bucles se usan para ejecutar un bloque de código repetidamente.

- `for`: Es el más común cuando se sabe el número exacto de iteraciones.
  - Estructura: `for (inicialización; condición; actualización)`
- `while`: Se repite mientras una condición sea `true`. Útil cuando no sabes de antemano cuántas veces se ejecutará el bucle.
- `do...while`: Similar a `while`, pero el bloque de código se ejecuta al menos una vez antes de verificar la condición.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de bucles
// Bucle for: imprime los números del 0 al 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Bucle while: cuenta del 5 al 1
let contador = 5;
while (contador > 0) {
  console.log(contador);
  contador--;
}
```

## break y continue

- `break`: Termina la ejecución del bucle por completo.
- `continue`: Salta la iteración actual del bucle y pasa a la siguiente.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de break y continue
for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue; // Salta la iteración cuando i es 3
  }
  if (i === 7) {
    break; // Termina el bucle cuando i es 7
  }
  console.log(i); // Imprime 0, 1, 2, 4, 5, 6
}
```

# 2. Operadores

Los operadores son símbolos especiales que nos permiten realizar operaciones con valores y variables.

## Operadores matemáticos

Sirven para realizar cálculos.

- `+`, `-`, `*`, `/`: Suma, resta, multiplicación, división.
- `%`: Módulo o resto de una división. Muy útil para saber si un número es par (`numero % 2 === 0`).
- `**`: Potencia.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de operadores matemáticos
let resultado_math = 10 % 3; // El resultado es 1 (el resto de 10 / 3)
let potencia_math = 2 ** 3; // El resultado es 8 (2 * 2 * 2)
```

## Operadores de comparación

Comparan dos valores y devuelven un booleano (`true` o `false`).

- `===`: Estrictamente igual (compara valor y tipo de dato).
- `!==`: Estrictamente diferente.
- `<`, `<=`, `>`, `>=`: Menor que, menor o igual que, mayor que, mayor o igual que.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de operadores de comparación
console.log(10 === '10'); // false (uno es número, el otro es string)
console.log(10 == '10'); // true (compara solo el valor, no el tipo) - ¡Es mejor usar ===!
console.log(5 > 3); // true
```

## Operadores lógicos

Combinan o manipulan valores booleanos.

- `&&` (AND): Devuelve `true` si todas las condiciones son `true`.
- `||` (OR): Devuelve `true` si al menos una condición es `true`.
- `!` (NOT): Invierte el valor booleano. `!true` es `false` y viceversa.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de operadores lógicos
let tieneBoleto = true;
let esMayorDeEdad = false;
let puedeEntrar = tieneBoleto && esMayorDeEdad; // false
console.log(puedeEntrar);

let esDiaLibre = true;
let haceBuenTiempo = true;
let podemosSalir = esDiaLibre || haceBuenTiempo; // true
console.log(podemosSalir);
```

## Operadores de asignación

Asignan un valor a una variable.

- `=`: Asignación simple.
- `+=`, `-=`, `*=`, `/=`, etc.: Asignan un nuevo valor a la variable basándose en su valor actual. Por ejemplo, `x += 5` es lo mismo que `x = x + 5`.

# 3. Arrays (Arreglos)

Un array es una estructura de datos que almacena una colección de elementos, que pueden ser de cualquier tipo.

## Cómo recorrer arrays

- `for`: El bucle `for` tradicional es útil para acceder al índice de cada elemento.
- `for...of`: Este bucle es más moderno y simple, ya que itera directamente sobre los valores del array, sin necesidad de usar el índice.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de recorrido de arrays
let frutas = ['manzana', 'banana', 'naranja'];

// Recorrer con for tradicional
for (let i = 0; i < frutas.length; i++) {
  console.log(`Fruta en el índice ${i}: ${frutas[i]}`);
}

// Recorrer con for...of (más simple)
for (const fruta of frutas) {
  console.log(fruta);
}
```

## Métodos útiles de arrays

JavaScript tiene muchos métodos integrados en los arrays que facilitan su manipulación.

- `.map()`: Transforma un array creando uno nuevo. Recorre cada elemento y le aplica una función. El array original no se modifica.
  - Ejemplo: A un array de números, `map()` le podría sumar 1 a cada uno.
- `.filter()`: Filtra un array creando uno nuevo con los elementos que cumplen una condición.
  - Ejemplo: `filter()` podría devolver solo los números pares de un array.
- `.reduce()`: Acumula los valores de un array en un solo valor. Es muy potente y puede usarse para sumar, promediar, etc.
  - Ejemplo: `reduce()` puede sumar todos los números de un array para obtener un total.
- `.some()` / `.every()`: Verifican si los elementos de un array cumplen una condición.
  - `.some()`: Devuelve `true` si al menos un elemento cumple la condición.
  - `.every()`: Devuelve `true` si todos los elementos cumplen la condición.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de métodos de arrays
const numeros = [1, 2, 3, 4, 5];

// .map()
const numerosDuplicados = numeros.map(num => num * 2);
console.log(numerosDuplicados); // [2, 4, 6, 8, 10]

// .filter()
const numerosPares = numeros.filter(num => num % 2 === 0);
console.log(numerosPares); // [2, 4]

// .reduce()
const sumaTotal = numeros.reduce((acumulador, numeroActual) => acumulador + numeroActual, 0);
console.log(sumaTotal); // 15

// .some()
const tieneNumeroGrande = numeros.some(num => num > 4); // true (el 5 cumple la condición)
console.log(tieneNumeroGrande);
```

# 4. Strings (Cadenas de texto)

Una string es una secuencia de caracteres. Son inmutables, lo que significa que no se pueden modificar directamente, pero sus métodos nos permiten crear nuevas strings a partir de ellas.

## Propiedad .length y métodos comunes

- `.length`: Devuelve el número de caracteres de la string.
- `.toLowerCase()`, `.toUpperCase()`: Convierten la string a minúsculas o mayúsculas.
- `.includes()`: Devuelve `true` si la string contiene la subcadena especificada.
- `.indexOf()`: Devuelve el índice de la primera aparición de una subcadena.
- `.slice()`: Extrae una porción de la string y devuelve una nueva.
- `.split()`: Divide la string en un array de substrings basándose en un separador.
- `.join()`: Este método es del array, pero es el opuesto a `split()`. Convierte un array de strings en una sola string.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de métodos de strings
let saludo = 'Hola Mundo';

console.log(saludo.length); // 10
console.log(saludo.toLowerCase()); // "hola mundo"
console.log(saludo.includes('Mundo')); // true
console.log(saludo.slice(0, 4)); // "Hola"

let frase = 'El gato es un animal genial';
let palabras = frase.split(' ');
console.log(palabras); // ["El", "gato", "es", "un", "animal", "genial"]
let nuevaFrase = palabras.join('-');
console.log(nuevaFrase); // "El-gato-es-un-animal-genial"
```

## Recorrer letra por letra

Puedes usar un bucle `for` o `for...of` para iterar sobre cada carácter de la string.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de recorrido de strings
let palabra = 'Presentación';

// Usando for...of
for (const letra of palabra) {
  console.log(letra); // Imprime 'P', 'r', 'e', 's', etc.
}
```

# 5. Funciones

Las funciones son bloques de código reutilizables que realizan una tarea específica. Nos ayudan a organizar el código y evitar la repetición.

## Funciones normales y funciones flecha (arrow functions)

- Funciones normales: Declaradas con la palabra clave `function`.
- Funciones flecha: Una sintaxis más corta para escribir funciones. Son especialmente útiles en métodos de arrays como `map`, `filter`, etc.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de funciones
// Función normal
function sumar(a, b) {
  return a + b;
}

// Función flecha
const restar = (a, b) => {
  return a - b;
};

// Si la función flecha tiene una sola línea, se puede abreviar
const multiplicar = (a, b) => a * b;

console.log(sumar(5, 3)); // 8
console.log(multiplicar(5, 3)); // 15
```

## Parámetros con valores por defecto y retorno de valores

- Parámetros por defecto: Puedes asignar un valor a un parámetro en la declaración de la función. Si no se le pasa un valor al llamarla, usará el valor por defecto.
- `return`: La palabra clave `return` se usa para devolver un valor desde la función. Cuando la función encuentra un `return`, su ejecución termina inmediatamente.

## Recursividad básica

La recursividad ocurre cuando una función se llama a sí misma para resolver un problema. Es útil para problemas que se pueden dividir en subproblemas más pequeños del mismo tipo. Es crucial tener un caso base que detenga la recursión para evitar un bucle infinito.

**Ejemplo clásico**: El cálculo de un factorial (`n!`).

- Caso base: El factorial de 0 y 1 es 1.
- Paso recursivo: El factorial de `n` es `n` multiplicado por el factorial de `n - 1`.

**Ejemplo (JavaScript):**

```javascript
// Ejemplo de recursividad (factorial)
function factorial(n) {
  // Caso base: si n es 0, la función termina y devuelve 1
  if (n === 0) {
    return 1;
  }
  // Paso recursivo: la función se llama a sí misma con un valor menor
  return n * factorial(n - 1);
}

console.log(factorial(4)); // 4 * 3 * 2 * 1 = 24
```

# 6. Algoritmos (pensar en pasos)

Un algoritmo es una secuencia de instrucciones para resolver un problema. Antes de escribir código, es fundamental pensar en la lógica.

## 1. Leer el enunciado y ejemplos

Comprende exactamente lo que se te pide. ¿Qué entradas recibe? ¿Qué salida se espera?

Analiza los ejemplos para entender el comportamiento deseado, incluyendo casos límite (como un array vacío o un número cero).

## 2. Dividir en pasos simples (pseudocódigo)

No pienses en código, piensa en lenguaje humano. Escribe la solución paso a paso.

**Ejemplo**: Si quieres encontrar el número más grande en un array.

1. Crea una variable para guardar el número más grande. Inicia con el primer elemento del array.
2. Recorre el array desde el segundo elemento.
3. En cada elemento, pregunta si es más grande que el número que tienes guardado.
4. Si es más grande, actualiza tu variable.
5. Al final, devuelve la variable.

## 3. Traducir los pasos a código

Una vez que tienes el pseudocódigo, la traducción a un lenguaje de programación es mucho más sencilla.

Usa los conceptos que hemos revisado: bucles para recorrer, condicionales para comparar, variables para guardar.

## 4. Probar con distintos casos

Prueba tu código con los ejemplos del enunciado.

Prueba con casos límite que podrían fallar:

- Arrays vacíos o con un solo elemento.
- Números negativos o cero.
- Strings vacías.

Esto asegura que tu solución es robusta y funciona en todas las situaciones.
