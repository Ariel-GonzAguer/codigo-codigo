const fs = require('fs');
const path = require('path');

const approvedPath = path.resolve(__dirname, '..', '.github', 'approved-builds.json');
const lockPath = path.resolve(__dirname, '..', 'pnpm-lock.yaml');

if (!fs.existsSync(approvedPath)) {
  console.error('approved-builds.json no encontrado en .github/');
  process.exit(1);
}
if (!fs.existsSync(lockPath)) {
  console.error('pnpm-lock.yaml no encontrado en el proyecto.');
  process.exit(1);
}

const approved = JSON.parse(fs.readFileSync(approvedPath, 'utf8'));
const lock = fs.readFileSync(lockPath, 'utf8');

const escapeRegExp = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const errors = [];
for (const key of Object.keys(approved.approvedBuilds || {})) {
  // key es 'package@version'
  const parts = key.split('@');
  const pkg = parts[0];
  const version = parts.slice(1).join('@');
  const re = new RegExp(`^\\s*${escapeRegExp(pkg)}@${escapeRegExp(version)}:`, 'm');
  if (!re.test(lock)) {
    errors.push(`${key} no encontrado en pnpm-lock.yaml`);
  }
}

if (errors.length) {
  console.error('Errores de validación de approved-builds:');
  errors.forEach(e => console.error('- ' + e));
  process.exit(2);
}

console.log('✅ approved-builds.json validado correctamente contra pnpm-lock.yaml');
process.exit(0);
