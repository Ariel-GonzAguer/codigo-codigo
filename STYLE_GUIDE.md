# Guía de Estilo de Código - Código

Esta guía de estilo tiene como objetivo unificar convenciones de código, nombres de archivos, formato de commits y flujo de trabajo Git para facilitar la colaboración en el proyecto.

---

## 1. Estructura y nombres de archivos

Para que todo funcione bien, desde el despliegue hasta los test, se deben seguir estas convenciones:

- Cada herramienta tiene un archivo MDX en `coleccionHerramientas/` siguiendo la plantilla en `PLANTILLA_MDX.mdx`.
- Los nombres de archivos MDX deben ser en **PascalCase** y coincidir con el nombre de la herramienta, llevando como prefijo el framework correspondiente. Ejemplo: `React-ReduxToolkit.mdx`, `Vue-VueRouter.mdx`, `Pnpm.mdx` ( herramienta agnóstica).
- Los componentes deben estar en `src/components/<Framework>/` y usar **PascalCase**. Ejemplo: `UseState.jsx`, `VueRouter.vue`.
- En general no es necesario ni se recomienda agregar más archivos de estilos, pero si necesita agregar alguno, los archivos de estilo deben estar en `src/estilos/` y usar **kebab-case**, teniendo el framework como prefijo + el nombre del componente. Ejemplo: `react-UseState-boton.css`, `vue-VueRouter-boton.css`.
- Los archivos de prueba deben estar en `src/__tests__/`, usar **PascalCase**, y usar el framework correspondiente como prefijo + el nombre del componente. Ejemplo: `Preact-UseState.test.jsx`, `Solid-CreateSignal.test.vue`.  
El proyecto ya incluye configuración para cada framework. Puede ver los comandos disponibles en `package.json`.
- Las imágenes deben estar en `public/img/` y usar **kebab-case**, usando el framework correspondiente como prefijo + el nombre del componente. Ejemplo: `react-ReduxToolkit-foto.png`, `vue-VueRouter-imagen-gato-rojo.png`.

---

## 2. Convenciones de Componentes y Código

- Use **2 espacios** para indentación.
- Finalice líneas con punto y coma (`;`).
- Use comillas simples (`'`) para strings, excepto cuando el string contiene comillas simples.
- Siempre declare variables con `const` o `let` (no usar `var`).
- Use **camelCase** para variables y funciones: `const calcularVencimiento = () => {}`.
- Use **PascalCase** para componentes y clases: `function ComidaActual() {}` o `class LugarClass {}`.
- Componentes funcionales:
  ```jsx
  // React
  // Componente en PascalCase
  function MiComponente({ prop }) {
    return <div>{prop}</div>;
  }
  export default MiComponente;
  ```
- Hooks deben comenzar con `use`: `useEmergencyFoodStore`, `useAuthStore`.
- Para estilos, use Tailwind CSS y evite CSS en línea. Si es necesario, use `className` o `:class` con clases de Tailwind.
- De momento no hay restricciones sobre elección de colores y demás para componentes de UI.
- Use comentarios para secciones complejas del código.

---

## 3. Formato de MDX

- Para bloques de código:
  - No olvide la clase `bloqueCodigo` en el `div`.
  - Por favor vea [PLANTILLA_MDX.mdx](PLANTILLA_MDX.mdx) para tener una idea más clara, ya que la sintaxis exacta no se puede mostrar bien acá.

```mdx
<div className="bloqueCodigo">
```jsx
// Código acá 
``` 
</div>
```

- Encabezados en **Mayúscula Inicial** y sin punto final.
- Líneas en blanco entre párrafos y secciones.
- Use tono de "usted" para dirigirse a la persona lectora.
- Negritas con `**texto**` y cursivas con `_texto_`.
- Listas con guión (`-`) y espacio.
- Listas numeradas con número, punto y espacio (`1. `).
- Enlaces relativos: `[Texto](./RUTA)`.
- Imágenes relativas: `![Alt](/imagen.png)`.
- Use componentes importados para ejemplos interactivos, por ejemplo: 
  ```jsx
  <UseState client:load />
  ```
  - No olvide usar la directiva `client:load` para cargar el componente en el cliente:
- Metadatos al inicio del archivo MDX:

  ```mdx
  ---
  id: nombreDeLaHerramienta
  titulo: Título de la guía
  herramienta: Nombre de la herramienta
  personaEncargada: Su nombre
  fechaDeCreacion: fecha en que se hace el PR
  fechaDeUltimaActualizacion: fecha en que se actualizó por última vez la entrada. Inicialmente igual a fechaDeCreacion
  framework: Elija solo uno → React | Vue | Svelte | SolidJS | Preact | Astro
  ---
  ```

  - Vea [PLANTILLA_MDX.mdx](PLANTILLA_MDX.mdx) para más detalles.

---

## 4. Convenciones de commit

Usa el siguiente estilo para mensajes de commit:

```
<tipo>(<framework | otra: <nombre de la herramienta>>): descripción corta

Descripción más detallada (opcional).
```

- **tipos**:
  - `agregar`: nueva herramienta, función o componente
  - `arreglar`: corrección de bug/_typo_(error ortográfico)
  - `documentacion`: cambios en documentación
  - `mejorar`: formato, espacios, punto y coma, sin lógica
  - `estilos`: cambios en Tailwind/CSS
  - `refactor`: refactorización de código
  - `test`: agregar o actualizar pruebas
  - `otros`: cambios que no encajan en las categorías anteriores

- **framework | otra**: indique el framework afectado (React, Vue, Svelte, SolidJS, Preact, Astro) u `otra` si no es una herramienta agnóstica.

Ejemplo:

```md
agregar(React): agregar guía para Redux Toolkit
```

```md
arreglar(otra: pnpm): agregar introducción a pnpm
```

---

> [!TIP]
> Si usa la interfaz de VS Code para hacer el commit, escriba `ccm` y presione `ctrl` + `barra de espacio`, esto generará una plantilla con la convención de commit.

---

## 5. PR y revisión de código

> [!IMPORTANT]  
> Antes de abrir un PR asegúrese de abrir un issue relacionado, si no existe uno. **No se aceptarán PRs sin un issue asociado**.

- Complete la plantilla de PR.
- Verifique que `pnpm run lint` y `pnpm run prettierCheck <su-archivo>` pasen sin errores.
- Asegúrese de que la documentación se actualice si es necesario.

---

## 6. Otras recomendaciones

- Mantenga pequeñas y atómicas sus PRs.
- Añada pruebas manuales o automáticas cuando sea posible.
- Consulte `SECURITY.md` antes de exponer secretos.

## 7. Uso de IA

- Puede usar IA para ayudar a escribir código, test o documentación, pero **siempre revise y entienda** lo que la IA genera.
- No dependa exclusivamente de la IA para tareas críticas.
- Asegúrese de que el código generado por IA cumpla con esta guía de estilo.
