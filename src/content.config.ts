// Import the glob loader
import { glob } from "astro/loaders";
// Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';

// Define a `loader` and `schema` for each collection
const herramientas = defineCollection({
  loader: glob({
  // Incluir archivos .md y .mdx, ignorando archivos que empiecen por _
  pattern: "**/[^_]*.{md,mdx}",
  // la carpeta `coleccionHerramientas` está en la raíz del proyecto,
  // como este archivo está en `src/`, hay que subir un nivel.
  base: "coleccionHerramientas",
  }),
  schema: z.object({
    // definir el esquema/forma de los datos que se van a cargar
  id: z.string().optional(),
  titulo: z.string().optional(),
  herramienta: z.string().optional(),
  personaEncargada: z.string().optional(),
  fechaDeCreacion: z.string().optional(),
  fechaDeUltimaActualizacion: z.string().optional(),
  framework: z.string().optional(),
  }),
});
// Export a single `collections` object to register your collection(s)
export const collections = { herramientas };
