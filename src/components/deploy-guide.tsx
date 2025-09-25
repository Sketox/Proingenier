import React from "react";
import { Card, CardBody, Divider } from "@heroui/react";
import { Icon } from "@iconify/react";

export const DeployGuide = () => {
  const deployOptions = [
    {
      name: "Netlify",
      icon: "logos:netlify",
      steps: [
        "Cree una cuenta en netlify.com",
        "Haga clic en 'Add new site' > 'Import an existing project'",
        "Conecte su repositorio de GitHub/GitLab/Bitbucket",
        "Seleccione el repositorio de su proyecto",
        "Configure los ajustes de build: Build command: 'npm run build', Publish directory: 'dist'",
        "Haga clic en 'Deploy site'",
      ],
    },
    {
      name: "Vercel",
      icon: "logos:vercel",
      steps: [
        "Cree una cuenta en vercel.com",
        "Haga clic en 'Add New' > 'Project'",
        "Conecte su repositorio de GitHub/GitLab/Bitbucket",
        "Seleccione el repositorio de su proyecto",
        "Los ajustes de build se detectarán automáticamente para proyectos Vite",
        "Haga clic en 'Deploy'",
      ],
    },
    {
      name: "GitHub Pages",
      icon: "logos:github",
      steps: [
        "Instale gh-pages: 'npm install --save-dev gh-pages'",
        'Agregue a package.json: "homepage": "https://sunombre.github.io/su-repositorio"',
        'Agregue a scripts: "predeploy": "npm run build", "deploy": "gh-pages -d dist"',
        "Modifique vite.config.js para agregar base: '/su-repositorio/'",
        "Ejecute: 'npm run deploy'",
        "Configure GitHub Pages en la configuración del repositorio",
      ],
    },
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary mb-4">
        Cómo hacer deploy de su sitio web
      </h2>

      <p className="text-gray-600 mb-6">
        Antes de hacer deploy, asegúrese de tener su código en un repositorio
        Git (GitHub, GitLab, Bitbucket). Luego, puede elegir entre varias
        opciones para publicar su sitio:
      </p>

      <div className="space-y-8">
        {deployOptions.map((option, index) => (
          <Card key={index} className="border border-gray-100">
            <CardBody className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Icon icon={option.icon} className="text-3xl" />
                <h3 className="text-xl font-semibold">{option.name}</h3>
              </div>

              <ol className="list-decimal pl-5 space-y-2">
                {option.steps.map((step, stepIndex) => (
                  <li key={stepIndex} className="text-gray-700">
                    {step}
                  </li>
                ))}
              </ol>
            </CardBody>
          </Card>
        ))}
      </div>

      <Divider className="my-6" />

      <h3 className="text-xl font-semibold mb-3">Preparación para deploy</h3>
      <Card>
        <CardBody>
          <pre className="bg-gray-50 p-4 rounded overflow-x-auto">
            <code>{`# Instalar dependencias
npm install

# Compilar para producción
npm run build

# El sitio compilado estará en la carpeta 'dist'
# Este es el contenido que debe subir a su servidor web`}</code>
          </pre>
        </CardBody>
      </Card>
    </div>
  );
};
