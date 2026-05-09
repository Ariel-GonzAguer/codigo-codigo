# Código - Código

Este es un proyecto web que muestra cómo usar tecnologías y bibliotecas populares, pero explicado en español. El objetivo es ayudar a personas hispanohablantes a entender y aplicar estas herramientas mediante ejemplos concretos y documentación, sin tener que pasar por la barrera del idioma.

Usamos [Astro](https://astro.build/) como metaframework, ya que permite integrar componentes en varios frameworks (React, Vue, Svelte, Preact, SolidJS), además de soportar MDX para documentación enriquecida y ser ligero y fácil de desplegar. #TeamAstro 🚀

## Qué encontrará aquí

- Componentes en React, Vue, Svelte, Preact, SolidJS y Astro.
- Explicaciones en español de muchas herramientas.
- Ejemplos mínimos y patrones recomendados para integrarlas en proyectos.
- Una colección de archivos en `coleccionHerramientas/` con guías por herramienta.

Visite [el sitio en vivo aquí](https://codigo-codigo.vercel.app/) para ver la documentación y ejemplos.

## Estructura principal del repositorio

- `src/` – Código del sitio (Astro + frameworks) y componentes de ejemplo.
- `coleccionHerramientas/` – Documentación y ejemplos por herramienta en MDX.
- `public/` – Activos públicos (imágenes, favicon, etc.).

## Casos límite a considerar

- Si una herramienta requiere credenciales (p. ej. Firebase), se documentará cómo configurar variables de entorno; no se incluyen credenciales en el repositorio.
- Herramientas que requieren API keys/servicios externos: se muestran con variables de entorno y mocks.
- Versiones incompatibles: cada guía indicará la versión probada.
- Audiencia con distintos niveles: se incluye una sección "rápida" para usuarios avanzados y una sección "para comenzar" para principiantes.

## Empezar (instalación local)

1. Clone el repositorio:

```bash
git clone https://github.com/Ariel-GonzAguer/codigo-codigo
cd codigo-codigo
```

2. Instale dependencias (ejemplo con pnpm):

```bash
pnpm install
```

3. Ejecute el sitio en modo desarrollo:

```bash
pnpm dev
```

4. Abra http://localhost:4321 (o el puerto que indique la salida) para ver la documentación y ejemplos.

> [!TIP]
> Si usa otra herramienta (npm, yarn), reemplace el comando de instalación y ejecución por el equivalente.

### Nota sobre dependencias peer

Si al ejecutar `pnpm install` aparecen warnings o errores sobre "unmet peer dependencies" relacionados con `vite` y `@sveltejs/vite-plugin-svelte`, es porque hay plugins que esperan una versión distinta de `vite` (p. ej. `^6.0.0`) mientras que otras dependencias resuelven `vite@7.x`.

Solución rápida (temporal): crea un archivo `.npmrc` en la raíz del proyecto con el contenido `strict-peer-dependencies=false` para evitar que la instalación falle en entornos locales o CI donde se acepta la diferencia de versiones.

Solución recomendada (largo plazo): alinear las versiones de `vite` y de los plugins compatibles (actualizar plugins a versiones que soporten `vite@7` o fijar `vite@6` si es necesario) y regenerar el lockfile con `pnpm install`.

---

## Licencia

El contenido está disponible bajo la licencia MIT.

## Contacto

Si tiene preguntas o sugerencias, abra un issue o PR en el repositorio.
