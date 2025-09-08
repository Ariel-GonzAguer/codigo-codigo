# Herramientas en Español

Este es un proyecto web que muestra cómo usar tecnologías y bibliotecas populares, pero explicado en español. El objetivo es ayudar a personas hispanohablantes a entender y aplicar estas herramientas mediante ejemplos concretos y documentación, sin tener que pasar por la barrera del idioma.

Usamos [Astro](https://astro.build/) como metaframework, ya que permite integrar componentes en varios frameworks (React, Vue, Svelte, Preact, SolidJS), además de soportar MDX para documentación enriquecida y ser ligero y fácil de desplegar.

## Qué encontrará aquí

- Componentes en React, Vue, Svelte, Preact, SolidJS.
- Explicaciones en español de muchas herramientas.
- Ejemplos mínimos y patrones recomendados para integrarlas en proyectos.
- Una colección de archivos en `coleccionHerramientas/` con guías por herramienta.

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

1. Clona el repositorio:

```bash
git clone <url-del-repositorio>
cd herramientasEnEspanol
```

2. Instala dependencias (ejemplo con npm):

```bash
npm install
```

3. Ejecuta el sitio en modo desarrollo:

```bash
npm run dev
```

4. Abre http://localhost:4321 (o el puerto que indique la salida) para ver la documentación y ejemplos.

Nota: Si usas otra herramienta (pnpm, yarn), reemplaza el comando de instalación y ejecución por el equivalente.

## Cómo está organizada la colección de herramientas

Cada herramienta tiene un archivo MDX en `coleccionHerramientas/` con la siguiente plantilla establecida:

- Id
- Titulo
- Herramienta
- Persona Encargada
- Fecha de creación
- Fecha de última actualización
- Framework
- Explicación de la herramienta

---

## Licencia

El contenido está disponible bajo la licencia MIT.

## Contacto

Si tiene preguntas o sugerencias, abra un issue o PR en el repositorio.
