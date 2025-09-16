# Guía de Estilo de Código - Código

Esta guía de estilo tiene como objetivo unificar convenciones de código, nombres de archivos, formato de commits y flujo de trabajo Git para facilitar la colaboración en el proyecto.

---

## 1. Estructura y nombres de archivos

- Cada herramienta tiene un archivo MDX en `coleccionHerramientas/` siguiendo la plantilla en `PLANTILLA_MDX.mdx`.
- Los nombres de archivos MDX deben ser en **PascalCase** y coincidir con el nombre de la herramienta, por ejemplo: `UseState.mdx`, `VueRouter.mdx`.
- Los componentes React, Vue, etc., deben estar en `src/components/<Framework>/` y usar **PascalCase**: `UseState.jsx`, `VueRouter.vue`.
- Los archivos de estilo deben estar en `src/styles/` y usar **kebab-case**: `boton.css`, `tarjeta.vue`. En general no es necesario agregar más archivos de estilos.
- Los archivos de prueba deben estar en `src/__tests__/` y usar **PascalCase**: `UseState.test.jsx`, `VueRouter.test.vue`.

---

## 2. Convenciones de JavaScript/TypeScript

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

---

## 3. Formato de MDX

- Para bloques de código use:

```js / jsx
// código
```

Ver ejemplo de `Componentes funcionales` arriba.

- Encabezados en **Mayúscula Inicial** y sin punto final.
- Líneas en blanco entre párrafos y secciones.
- Listas con guión (`-`) y espacio.
- Enlaces relativos: `[Texto](./RUTA)`.
- Imágenes relativas: `![Alt](./RUTA/imagen.png)`.
- Use componentes importados para ejemplos interactivos, p. ej. `<UseState client:load />`.
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
<tipo>(<área | framework>): descripción corta

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

Ejemplo:

```
agregar(React): agregar guía para Redux Toolkit
```

> [!TIP]
> Si usa la interfaz de VS Code para hacer el commit, escriba `ccm` y presione `ctrl` + `barra de espacio`, esto generará una plantilla con la convención de commit.

---

## 5. PR y revisión de código

> [!IMPORTANT]  
> Antes de abrir un PR asegúrese de abrir un issue relacionado, si no existe uno. **No se aceptarán PRs sin un issue asociado**.

- Complete la plantilla de PR.
- Verifique que `npm run lint` y `npm run prettierCheck` pasen sin errores.
- Asegúrese de que la documentación se actualice si es necesario.

---

## 6. Otras recomendaciones

- Mantenga pequeñas y atómicas sus PRs.
- Añada pruebas manuales o automáticas cuando sea posible.
- Consulte `SECURITY.md` antes de exponer secretos.
