# Guía para Colaborar

¡Gracias por su interés en contribuir a Código - Código! Hay varias formas de colaborar: reportar bugs, proponer features, trabajar en features, crear/mejorar documentación y testear.

## Colaborar con código

Siga estos pasos para colaborar de manera efectiva y ordenada.

### 1. Haga un fork del repositorio

- Vaya a la página principal del repositorio en GitHub.
- Haga clic en el botón **Fork** (arriba a la derecha) para crear una copia en su cuenta.

### 2. Clone su fork

- En su cuenta, haga clic en el botón **Code** y copie la URL.
- Abra su terminal y ejecute:

```bash
  git clone https://github.com/{su-usuario}/codigo-codigo.git
  cd codigo-codigo
```

### 3. Cree una rama para su cambio

```bash
  git checkout -b nombre-de-su-rama
```

> [!IMPORTANT]
> Debe crear una rama específica para cada aporte. Use nombres descriptivos, por ejemplo: `arreglar-typo-zustand`, `agregar-ejemplo-react-query`.

### 4. Instale las dependencias

```bash
npm install
```

### 5. Desarrolle su propuesta

- Siga la guía de estilo en [Guía de Estilo](STYLE_GUIDE.md).
- Asegúrese de seguir las buenas prácticas y el estilo del proyecto.

### 6. Pruebe su código

- Ejecute la app localmente:

```bash
  npm run dev
```

- Verifique que su cambio funciona y no rompe nada existente.
- No olvide ejecutar `npm run lint` para verificar el **estilo** del código.
- No olvide ejecutar `npm run prettierCheck` y `npm run prettierFix` para verificar y corregir el **formato** del código.

### 7. Haga commit y push

- Añada sus cambios y escriba un mensaje de commit claro:

```bash
  git add .
  git commit -m "Descripción clara de su cambio"
  git push origin nombre-de-su-rama
```

> [!TIP]
> Si usa la interfaz de VS Code para hacer el commit en la rama main, escriba `ccm` y presione `ctrl` + `barra de espacio`, esto generará una plantilla con la convención de commit.

### 8. Abra un Pull Request

#### 8.1 Desde la línea de comandos

```bash
  git checkout main
  git pull origin main
  git checkout <nombre-de-su-rama>
  git merge main
```

> [!IMPORTANT]
> Antes de abrir un PR asegúrese de abrir un issue relacionado, si no existe uno. **No se aceptarán PRs sin un issue asociado**.

#### 8.2 Desde la página de GitHub

1. Ingrese a la página principal del repositorio en GitHub.
2. Verá una notificación que le sugiere crear un Pull Request para su rama recién subida.
3. Haga clic en el botón **Compare & pull request** o en la pestaña **Pull requests** y luego en **New pull request**.
4. Seleccione su rama como "compare" y la rama `main` como "base".
5. Complete la plantilla de Pull Request.
6. Haga clic en **Create pull request**.

¡Listo! Su PR estará abierta y el equipo de mantenimiento podrá revisarlo.

## 9. Espere revisión

- El equipo de mantenimiento revisará su Pull Request.
- Puede que le pidan cambios o sugerencias antes de aprobarlo.
- Por favor, sea paciente y responda a los comentarios.

## 10. ¡Listo!

- Cuando su Pull Request sea aceptada, su contribución formará parte del proyecto.

---

## Reporte de Bugs y Propuestas de Funcionalidades

### ¿Cómo reportar un bug?

- Diríjase a la sección de [Issues](https://github.com/Ariel-GonzAguer/codigo-codigo/issues) del repositorio.
- Haga clic en **New Issue** y seleccione **Reporte de Bug**.
- Llene la plantilla como se indica.
- **No incluya información sensible o privada**.

### ¿Cómo proponer una nueva funcionalidad?

- Vaya a la sección de [Issues](https://github.com/Ariel-GonzAguer/codigo-codigo/issues).
- Haga clic en **New Issue** y seleccione la plantilla **Solicitud de Feature**.
- Llene la plantilla como se indica.

### Consejos

- Lea el [Código de Conducta](CODE_OF_CONDUCT.md) antes de contribuir.
- Lea [Guía de Estilo](STYLE_GUIDE.md) antes de hacer PR.
- Sea respetuoso y paciente en las discusiones.
- Si tiene dudas, abra un issue o pregunte en el Pull Request.

---

**¡Gracias por ayudar a mejorar Código-Código!**
