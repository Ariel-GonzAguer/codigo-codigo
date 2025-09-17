// función para obtener colecciones
import { getCollection } from 'astro:content';

// Obtener todas las herramientas
export const herramientas = await getCollection('herramientas');

// Agrupar por el campo 'framework' del frontmatter
const grupo = new Map();
for (const item of herramientas) {
  const meta = (item.data || {}) as any;
  let framework = meta.framework || 'Sin framework';
  const key = String(framework).trim() || 'Sin framework';
  if (!grupo.has(key)) grupo.set(key, []);
  grupo.get(key)!.push(item);
}

// Ordenar las claves alfabéticamente
export const frameworksFiltrados = Array.from(grupo.keys()).sort((a, b) => a.localeCompare(b));
// Agrupar por el campo 'framework' del frontmatter (soporta string o array)
export const herramientasPorFramework = grupo;
