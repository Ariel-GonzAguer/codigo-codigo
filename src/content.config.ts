// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a `loader` and `schema` for each collection
const herramientas = defineCollection({
  loader: glob({
  pattern: "**/[^_]*.mdx",
  // la carpeta `coleccionHerramientas` está en la raíz del proyecto,
  // como este archivo está en `src/`, hay que subir un nivel.
  base: "../coleccionHerramientas",
  }),
  schema: z.object({
    // definir el esquema/forma de los datos que se van a cargar
    id: z.string(),
    titulo: z.string(),
    herramienta: z.string(),
    personaEncargada: z.string(),
    fechaDeCreacion: z.string(),
    fechaDeUltimaActualizacion: z.string(),
    framework: z.string(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { herramientas };
