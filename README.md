# PROINGENIER - Sitio Web Corporativo

Este proyecto es un sitio web para PROINGENIER, especializado en proyectos de ingeniería en energía solar y sistemas de seguridad.

## Requisitos previos

- Node.js (versión 18 o superior)
- npm (incluido con Node.js)

## Instalación

1. Clone el repositorio:
   ```
   git clone https://github.com/su-usuario/proingenier-website.git
   cd proingenier-website
   ```

2. Instale las dependencias:
   ```
   npm install
   ```

3. Inicie el servidor de desarrollo:
   ```
   npm run dev
   ```

4. Abra su navegador en `http://localhost:5173`

## Personalización de imágenes

1. Coloque sus imágenes en la carpeta `public/images/`
2. Las referencias a las imágenes ya están configuradas en los componentes para usar archivos locales

## Compilación para producción

Para compilar el sitio para producción:

```
npm run build
```

El sitio compilado estará disponible en la carpeta `dist`.

## Opciones de deploy

### Netlify

1. Cree una cuenta en [netlify.com](https://netlify.com)
2. Haga clic en "Add new site" > "Import an existing project"
3. Conecte su repositorio de GitHub/GitLab/Bitbucket
4. Configure los ajustes de build:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Haga clic en "Deploy site"

### Vercel

1. Cree una cuenta en [vercel.com](https://vercel.com)
2. Haga clic en "Add New" > "Project"
3. Conecte su repositorio de GitHub/GitLab/Bitbucket
4. Los ajustes de build se detectarán automáticamente
5. Haga clic en "Deploy"

### GitHub Pages

1. Instale gh-pages:
   ```
   npm install --save-dev gh-pages
   ```

2. Modifique `package.json`:
   ```json
   {
     "homepage": "https://sunombre.github.io/su-repositorio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Modifique `vite.config.js` para agregar la base:
   ```javascript
   export default defineConfig({
     plugins: [react()],
     base: '/su-repositorio/'
   })
   ```

4. Ejecute:
   ```
   npm run deploy
   ```

5. Configure GitHub Pages en la configuración del repositorio

## Estructura del proyecto

- `src/` - Código fuente
  - `components/` - Componentes React
  - `App.tsx` - Componente principal
  - `main.tsx` - Punto de entrada
  - `index.css` - Estilos globales
- `public/` - Archivos estáticos (imágenes, favicon, etc.)
- `dist/` - Código compilado (generado al ejecutar `npm run build`)
