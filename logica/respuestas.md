# Respuestas - Ejercicios de Lógica de Programación

## 1. Control de flujo

**1.1 Convertir un if...else a operador ternario:**

```js
// Versión original
function esPar(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// Respuesta: Versión con operador ternario
function esPar(num) {
  return num % 2 === 0 ? true : false;
}





// Versión aún más simplificada (recomendada)
function esPar(num) {
  return num % 2 === 0;
}
```

**1.2 Bucle for con números impares del 1 al 20:**

```js
for (let i = 1; i <= 20; i += 2) {
  console.log(i);
}

// Alternativa
for (let i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}
```

**1.3 Convertir while a for:**

```js
// Versión original (while)
let i = 0;
while (i < 10) {
  console.log(i * 2);
  i++;
}

// Respuesta: Versión con for
for (let i = 0; i < 10; i++) {
  console.log(i * 2);
}
```

**1.4 ¿Qué imprime el código con continue y break?**

```js
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue; // Salta la iteración cuando i = 2
  }
  if (i === 4) {
    break; // Termina el bucle cuando i = 4
  }
  console.log(i);
}

// Respuesta: Imprime 0, 1, 3
// Explicación:
// i = 0: se imprime 0
// i = 1: se imprime 1
// i = 2: continue salta la impresión
// i = 3: se imprime 3
// i = 4: break termina el bucle antes de imprimir
```

## 2. Operadores

**2.1 Diferencia entre == y ===:**

```js
// == compara solo el valor (con conversión de tipo)
// === compara valor Y tipo (comparación estricta)

console.log(5 == '5');   // true (convierte '5' a número)
console.log(5 === '5');  // false (diferentes tipos)

console.log(true == 1);  // true (convierte true a 1)
console.log(true === 1); // false (diferentes tipos)

console.log(null == undefined);  // true (caso especial)
console.log(null === undefined); // false (diferentes tipos)
```

**2.2 Evaluar expresiones:**

```js
10 % 3        // Respuesta: 1 (resto de 10 / 3)
2 ** 4        // Respuesta: 16 (2 elevado a la 4)
'5' === 5     // Respuesta: false (string vs número)
'5' == 5      // Respuesta: true (conversión automática)
!true         // Respuesta: false (negación de true)
true && false // Respuesta: false (AND: ambos deben ser true)
true || false // Respuesta: true (OR: al menos uno debe ser true)
```

**2.3 Función para verificar si puede votar:**

```js
function puedeVotar(edad, tieneDocumento) {
  return edad >= 18 && tieneDocumento;
}

// Ejemplos de uso:
console.log(puedeVotar(20, true));  // true
console.log(puedeVotar(17, true));  // false
console.log(puedeVotar(20, false)); // false
```

**2.4 Simplificar con operadores de asignación:**

```js
// Versión original
let puntos = 100;
puntos = puntos + 50;
puntos = puntos * 2;
puntos = puntos - 25;

// Respuesta: Versión simplificada
let puntos = 100;
puntos += 50;  // puntos = 150
puntos *= 2;   // puntos = 300
puntos -= 25;  // puntos = 275
```

## 3. Arrays (Arreglos)

**3.1 Suma de elementos con bucle for:**

```js
function sumarArray(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    suma += numeros[i];
  }
  return suma;
}

// Ejemplo de uso:
console.log(sumarArray([1, 2, 3, 4, 5])); // 15
```

**3.2 Convertir for tradicional a for...of:**

```js
// Versión original
let animales = ['perro', 'gato', 'pájaro'];
for (let i = 0; i < animales.length; i++) {
  console.log(animales[i]);
}

// Respuesta: Versión con for...of
let animales = ['perro', 'gato', 'pájaro'];
for (const animal of animales) {
  console.log(animal);
}
```

**3.3 Usar .map() para multiplicar por 3:**

```js
let numeros = [2, 4, 6, 8];
let numerosTriplicados = numeros.map(num => num * 3);
console.log(numerosTriplicados); // [6, 12, 18, 24]
```

**3.4 Usar .filter() para palabras largas:**

```js
let palabras = ['casa', 'programación', 'sol', 'computadora', 'web'];
let palabrasLargas = palabras.filter(palabra => palabra.length > 5);
console.log(palabrasLargas); // ['programación', 'computadora']
```

**3.5 Usar .reduce() para encontrar el máximo:**

```js
let numeros = [3, 7, 2, 9, 1, 5];
let maximo = numeros.reduce((max, actual) => actual > max ? actual : max);
console.log(maximo); // 9

// Alternativa más clara:
let maximo2 = numeros.reduce((max, actual) => Math.max(max, actual));
```

**3.6 ¿Qué retorna .some() y .every()?**

```js
let edades = [15, 22, 17, 30, 16];

edades.some(edad => edad >= 18)  // Respuesta: true (hay al menos uno >= 18)
edades.every(edad => edad >= 18) // Respuesta: false (no todos son >= 18)
```

## 4. Strings (Cadenas de texto)

**4.1 Función de saludo en mayúsculas:**

```js
function saludarEnMayusculas(nombre) {
  return `Hola, ${nombre}!`.toUpperCase();
}

// Alternativa sin template literals:
function saludarEnMayusculas(nombre) {
  return ("Hola, " + nombre + "!").toUpperCase();
}

console.log(saludarEnMayusculas("Ana")); // "HOLA, ANA!"
```

**4.2 Contar letra 'a' en "programación":**

```js
function contarLetraA(palabra) {
  let contador = 0;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i].toLowerCase() === 'a') {
      contador++;
    }
  }
  return contador;
}

console.log(contarLetraA("programación")); // 2

// Alternativa con for...of:
function contarLetraA2(palabra) {
  let contador = 0;
  for (const letra of palabra) {
    if (letra.toLowerCase() === 'a') {
      contador++;
    }
  }
  return contador;
}
```

**4.3 Métodos de string:**

```js
// Verificar si "JavaScript" contiene "Script"
console.log("JavaScript".includes("Script")); // true

// Obtener las primeras 4 letras de "desarrollo"
console.log("desarrollo".slice(0, 4)); // "desa"

// Convertir "HOLA mundo" a minúsculas
console.log("HOLA mundo".toLowerCase()); // "hola mundo"
```

**4.4 Convertir frase a array de palabras:**

```js
function fraseAArray(frase) {
  return frase.split(' ');
}

console.log(fraseAArray("Me gusta programar")); // ["Me", "gusta", "programar"]
```

**4.5 Unir array con guiones:**

```js
function unirConGuiones(palabras) {
  return palabras.join('-');
}

console.log(unirConGuiones(["hola", "mundo", "cruel"])); // "hola-mundo-cruel"
```

**4.6 Verificar palíndromo:**

```js
function esPalindromo(palabra) {
  const palabraLimpia = palabra.toLowerCase();
  const palabraInvertida = palabraLimpia.split('').reverse().join('');
  return palabraLimpia === palabraInvertida;
}

console.log(esPalindromo("radar")); // true
console.log(esPalindromo("hola"));  // false

// Alternativa sin métodos de array:
function esPalindromo2(palabra) {
  const palabraLimpia = palabra.toLowerCase();
  let inicio = 0;
  let fin = palabraLimpia.length - 1;
  
  while (inicio < fin) {
    if (palabraLimpia[inicio] !== palabraLimpia[fin]) {
      return false;
    }
    inicio++;
    fin--;
  }
  return true;
}
```

## 5. Funciones

**5.1 Convertir a función flecha:**

```js
// Versión original
function calcularArea(base, altura) {
  return (base * altura) / 2;
}

// Respuesta: Función flecha
const calcularArea = (base, altura) => {
  return (base * altura) / 2;
};

// Versión más corta (una sola expresión):
const calcularArea = (base, altura) => (base * altura) / 2;
```

**5.2 Usar parámetros por defecto:**

```js
// Versión original
function saludar(nombre, saludo) {
  if (saludo === undefined) {
    saludo = 'Hola';
  }
  return saludo + ', ' + nombre + '!';
}

// Respuesta: Con parámetros por defecto
function saludar(nombre, saludo = 'Hola') {
  return saludo + ', ' + nombre + '!';
}

// O como función flecha:
const saludar = (nombre, saludo = 'Hola') => `${saludo}, ${nombre}!`;
```

**5.3 Función recursiva para suma 1 al n:**

```js
function sumaHasta(n) {
  // Caso base
  if (n <= 0) {
    return 0;
  }
  // Paso recursivo
  return n + sumaHasta(n - 1);
}

console.log(sumaHasta(4)); // 10 (1 + 2 + 3 + 4)
console.log(sumaHasta(5)); // 15 (1 + 2 + 3 + 4 + 5)
```

**5.4 Problema con función recursiva infinita:**

```js
// Función problemática:
function contar(n) {
  console.log(n);
  return contar(n + 1); // ¡Infinito! No hay caso base
}

// Respuesta: Problema y solución
// PROBLEMA: No tiene caso base, causará stack overflow
// SOLUCIÓN: Añadir condición de parada

function contar(n, limite = 10) {
  console.log(n);
  if (n >= limite) {
    return; // Caso base
  }
  return contar(n + 1, limite);
}
```

**5.5 Función que recibe función de operación:**

```js
function calcular(a, b, operacion) {
  return operacion(a, b);
}

// Ejemplos de uso:
console.log(calcular(5, 3, (a, b) => a + b)); // 8
console.log(calcular(5, 3, (a, b) => a * b)); // 15
console.log(calcular(5, 3, (a, b) => a - b)); // 2
console.log(calcular(5, 3, (a, b) => a / b)); // 1.666...
```

## 6. Algoritmos (pensar en pasos)

**6.1 Pseudocódigo para nombre más largo:**

```
PSEUDOCÓDIGO:
1. Crear variable nombreMasLargo = primer elemento del array
2. Recorrer el array desde el segundo elemento
3. Para cada nombre en el array:
   a. Si la longitud del nombre actual > longitud de nombreMasLargo
   b. Entonces nombreMasLargo = nombre actual
4. Retornar nombreMasLargo

IMPLEMENTACIÓN:
```

```js
function nombreMasLargo(nombres) {
  if (nombres.length === 0) return null;
  
  let nombreMasLargo = nombres[0];
  for (let i = 1; i < nombres.length; i++) {
    if (nombres[i].length > nombreMasLargo.length) {
      nombreMasLargo = nombres[i];
    }
  }
  return nombreMasLargo;
}
```

**6.2 Pseudocódigo para números pares ordenados:**

```
PSEUDOCÓDIGO:
1. Crear un array vacío llamado pares
2. Recorrer cada número en el array original
3. Si el número es par (número % 2 === 0):
   a. Añadir el número al array pares
4. Ordenar el array pares de mayor a menor
5. Retornar el array pares

IMPLEMENTACIÓN:
```

```js
function paresOrdenados(numeros) {
  const pares = numeros.filter(num => num % 2 === 0);
  return pares.sort((a, b) => b - a); // De mayor a menor
}
```

**6.3 Casos límite para promedio:**

```js
function promedio(numeros) {
  // CASOS LÍMITE A CONSIDERAR:
  // 1. Array vacío → retornar 0 o null o lanzar error
  // 2. Array con un solo elemento → retornar ese elemento
  // 3. Array con números negativos → funciona normal
  // 4. Array con valores no numéricos → filtrar o lanzar error
  
  if (numeros.length === 0) {
    return 0; // o throw new Error("Array vacío")
  }
  
  const suma = numeros.reduce((acc, num) => acc + num, 0);
  return suma / numeros.length;
}
```

**6.4 Implementar contador de vocales:**

```js
function contarVocales(palabra) {
  let contador = 0;
  const vocales = ['a', 'e', 'i', 'o', 'u'];
  
  for (const caracter of palabra.toLowerCase()) {
    if (vocales.includes(caracter)) {
      contador++;
    }
  }
  return contador;
}

console.log(contarVocales("programación")); // 5
```

**6.5 Optimización del algoritmo de búsqueda:**

```js
// Versión original (correcta pero se puede optimizar)
function existeNumero(array, numero) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === numero) {
      return true;
    }
  }
  return false;
}

// MEJORAS POSIBLES:
// 1. Usar método nativo (más legible):
function existeNumero(array, numero) {
  return array.includes(numero);
}

// 2. Si el array está ordenado, usar búsqueda binaria:
function existeNumeroOrdenado(arrayOrdenado, numero) {
  let inicio = 0;
  let fin = arrayOrdenado.length - 1;
  
  while (inicio <= fin) {
    const medio = Math.floor((inicio + fin) / 2);
    if (arrayOrdenado[medio] === numero) {
      return true;
    } else if (arrayOrdenado[medio] < numero) {
      inicio = medio + 1;
    } else {
      fin = medio - 1;
    }
  }
  return false;
}
```

**6.6 Problema completo con estudiantes:**

```js
function analizarEstudiantes(estudiantes) {
  // 1. Estudiante con calificación más alta
  const mejorEstudiante = estudiantes.reduce((mejor, actual) => 
    actual.calificacion > mejor.calificacion ? actual : mejor
  );
  
  // 2. Promedio de edad
  const promedioEdad = estudiantes.reduce((suma, estudiante) => 
    suma + estudiante.edad, 0) / estudiantes.length;
  
  // 3. Nombres de estudiantes con calificación >= 80
  const estudiantesDestacados = estudiantes
    .filter(estudiante => estudiante.calificacion >= 80)
    .map(estudiante => estudiante.nombre);
  
  return {
    mejorEstudiante,
    promedioEdad,
    estudiantesDestacados
  };
}

// Ejemplo de uso:
const estudiantes = [
  {nombre: "Ana", edad: 20, calificacion: 85},
  {nombre: "Luis", edad: 22, calificacion: 78},
  {nombre: "María", edad: 19, calificacion: 92},
  {nombre: "Carlos", edad: 21, calificacion: 88}
];

console.log(analizarEstudiantes(estudiantes));
/* Resultado:
{
  mejorEstudiante: {nombre: "María", edad: 19, calificacion: 92},
  promedioEdad: 20.5,
  estudiantesDestacados: ["Ana", "María", "Carlos"]
}
*/
```