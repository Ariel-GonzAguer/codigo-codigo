# Plan de migración: Vercel → Netlify

## Estado actual

- El proyecto es un sitio estático hecho con **Astro**.
- No usa SSR ni API routes: las páginas son `src/pages/index.astro`, `src/pages/herramientas.astro` y `src/pages/herramientas/[id].astro` con `getStaticPaths`.
- El build genera la carpeta `dist/` y luego indexa con Pagefind: `astro build && pagefind --site dist`.
- Actualmente tiene integrado `@vercel/analytics/astro` en `src/layouts/Layout.astro`.
- No existe `vercel.json`, `netlify.toml` ni workflows de despliegue en GitHub.
- Se asumió que:
  - **Se eliminará Vercel Analytics**.
  - **No hay dominio personalizado**; se usará la URL por defecto de Netlify.

## Decisiones tomadas

- Mantener el sitio como **estático** en Netlify (Astro static output por defecto).
- Usar la **integración Git de Netlify** para desplegar automáticamente desde `main`.
- No agregar analytics de reemplazo.
- No modificar el flujo de trabajo de GitHub Actions actual.

## Pasos del plan

### 1. Eliminar Vercel Analytics del código

**Archivos a modificar:**

- `src/layouts/Layout.astro`
  - Quitar la línea `import Analytics from '@vercel/analytics/astro';`.
  - Quitar el componente `<Analytics />`.
- `package.json`
  - Quitar la dependencia `"@vercel/analytics": "1.6.1"`.
- `pnpm-lock.yaml`
  - Regenerarlo con `pnpm install` después de quitar la dependencia.

### 2. Agregar configuración de Netlify

**Archivo a crear:** `netlify.toml`

Contenido sugerido:

```toml
[build]
  command = "pnpm build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"
  PNPM_VERSION = "8"
```

Notas:
- `pnpm build` ejecuta `astro build && pagefind --site dist` según `package.json`.
- `NODE_VERSION = "20"` y `PNPM_VERSION = "8"` coinciden con los valores usados en los workflows de GitHub.
- Astro genera `404.html` en `dist/` y Netlify lo sirve automáticamente como página 404, por lo que no se incluye regla de redirect.

### 3. Actualizar documentación

**Archivo a modificar:** `README.md`

- Cambiar la URL del sitio en vivo de `https://codigo-codigo.vercel.app/` a la nueva URL de Netlify (por ejemplo `https://codigo-codigo.netlify.app/`), una vez se conozca.
- Agregar una breve nota de que el despliegue se realiza en Netlify.

### 4. Verificar build local

Antes de conectar Netlify, ejecutar:

```bash
pnpm install
pnpm build
pnpm preview
```

Verificar que:
- No haya errores de build.
- `dist/` contenga `index.html`, `herramientas/`, `_astro/`, `pagefind/` y `404.html`.
- El sitio se vea correctamente en `http://localhost:4321` (o el puerto que indique `astro preview`).

### 5. Configurar el sitio en Netlify

Pasos en la UI de Netlify:

1. Ir a **Sites → Add new site → Import an existing project**.
2. Conectar la cuenta de GitHub y seleccionar el repositorio `Ariel-GonzAguer/codigo-codigo`.
3. En la configuración de build:
   - **Build command:** `pnpm build` (Netlify también lo detectará de `netlify.toml`).
   - **Publish directory:** `dist`.
4. Revisar que Netlify detecte `netlify.toml` y aplique las variables de entorno.
5. Hacer clic en **Deploy site**.

### 6. Configurar despliegues automáticos

- Netlify habilita deploys automáticos desde `main` por defecto.
- En **Site settings → Build & deploy → Continuous deployment**:
  - Confirmar que "Build command" es `pnpm build`.
  - Confirmar que "Publish directory" es `dist`.
  - Opcional: habilitar "Deploy previews" para pull requests.

### 7. Verificar despliegue en Netlify

- Una vez finalizado el primer deploy, abrir la URL de Netlify.
- Revisar:
  - Página de inicio.
  - `/herramientas/`.
  - Algunas rutas dinámicas como `/herramientas/react-usestate/`.
  - Búsqueda de Pagefind funcione.
- Revisar la consola del navegador para asegurarse de que no queden errores relacionados con Vercel Analytics.

### 8. Desconectar Vercel (manual, fuera de este repo)

- En el dashboard de Vercel, eliminar o pausar el proyecto para evitar deploys duplicados.
- Si el dominio `.vercel.app` estaba en uso, dejará de recibir tráfico una vez se actualicen los enlaces.

## Archivos que cambiarán

- `src/layouts/Layout.astro`
- `package.json`
- `pnpm-lock.yaml`
- `README.md`
- `netlify.toml` (nuevo)

## Riesgos y mitigaciones

| Riesgo | Mitigación |
|--------|------------|
| Pagefind no indexe correctamente | Verificar que `dist/` exista antes de correr `pagefind --site dist`; el script ya lo hace. |
| Build falla por versiones de pnpm/Node | Fijar `NODE_VERSION` y `PNPM_VERSION` en `netlify.toml` iguales a los usados localmente. |
| Rutas dinámicas 404 | Astro genera HTML estático para cada entrada; Netlify servirá los archivos estáticos correctamente. |
| Analytics queda referenciado en caché | Hacer `pnpm install` y limpiar `node_modules` y `.astro/` si es necesario. |

## Criterio de éxito

- El sitio se despliega correctamente en Netlify.
- La URL de Netlify sirve todas las páginas sin errores 404 inesperados.
- No quedan referencias a Vercel Analytics en el código ni en el build.
- `pnpm build` y `pnpm preview` funcionan localmente sin errores.
