# Guía de Estilo de Herramientas En Español

Esta guía de estilo tiene como objetivo unificar convenciones de código, nombres de archivos, formato de commits y flujo de trabajo Git para facilitar la colaboración en el proyecto.

---

## 1. Estructura y nombres de archivos

- Carpeta `src/`:
  - `components/` – Componentes reutilizables separados por carpeta según framework (React, Vue, etc.).
  - `layouts/` – Layouts de páginas.
  - `pages/` – Páginas del sitio.
  - `estilos/` – Archivos CSS.

- Archivos de configuración y documentación en la raíz:
  - `README.md`, `CODE_OF_CONDUCT.md`, `CONTRIBUTING.md`, `STYLE_GUIDE.md`, `SECURITY.md`, `.eslintrc.js`, etc.

---

## 2. Convenciones de JavaScript y React

- Use **2 espacios** para indentación.
- Finalice líneas con punto y coma (`;`).
- Siempre declare variables con `const` o `let` (no usar `var`).
- Use **camelCase** para variables y funciones: `const calcularVencimiento = () => {}`.
- Use **PascalCase** para componentes y clases: `function ComidaActual() {}` o `class LugarClass {}`.
- Componentes funcionales:
  ```jsx
  // Componente en PascalCase
  function MiComponente({ prop }) {
    return <div>{prop}</div>;
  }
  export default MiComponente;
  ```
- Hooks deben comenzar con `use`: `useEmergencyFoodStore`, `useAuthStore`.
- 
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

---

## 4. Convenciones de commit

Usa el siguiente estilo para mensajes de commit:

```
<tipo>(<área>): descripción corta

Descripción más detallada (opcional).
```

- **tipos**:

  - `agregar`: nueva herramienta, función o componente
  - `arreglar`: corrección de bug
  - `documentacion`: cambios en documentación
  - `mejorar`: formato, espacios, punto y coma, sin lógica
  - `estilos`: cambios en Tailwind/CSS
  - `refactor`: refactorización de código
  - `test`: agregar o actualizar pruebas
  - `otros`: cambios que no encajan en las categorías anteriores

Ejemplo:

```
agregar(reduxTLK): agregar guía para Redux Toolkit
```

> [!TIP]
> Si usa la interfaz de VS Code para hacer el commit, escriba `ccm` y presione `ctrl` + `barra de espacio`, esto generará una plantilla con la convención de commit.

---

## 5. PR y revisión de código

> [!IMPORTANT]  
> Antes de abrir un PR asegúrese de abrir un issue relacionado, si no existe uno. **No se aceptarán PRs sin un issue asociado**.

- Complete la plantilla de PR.
- Verifique que `npm run lint` y `npm run test` pasen sin errores.
- Asegúrese de que la documentación se actualice si es necesario.

---

## 6. Otras recomendaciones

- Mantenga pequeñas y atómicas sus PRs.
- Incluya capturas o GIFs para cambios de UI.
- Añada pruebas manuales o automáticas cuando sea posible.
- Consulte `SECURITY.md` antes de exponer secretos.
