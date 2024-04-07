# Proyecto Serverless para Gestión de Usuarios y Personas

Este proyecto Serverless proporciona una API para gestionar usuarios y personas utilizando AWS Lambda, AWS API Gateway y DynamoDB.

## Pasos para Empezar

Sigue estos pasos para configurar y desplegar el proyecto en tu entorno local y en AWS.

### Requisitos Previos

- Node.js y npm instalados en tu sistema
- Cuenta de AWS con acceso a AWS Lambda, AWS API Gateway y DynamoDB
- Serverless Framework instalado globalmente (`npm install -g serverless`)

### Configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias del proyecto ejecutando `npm install`.

### Despliegue Local

1. Ejecuta el comando `serverless offline start` para iniciar el proyecto en tu entorno local.
2. Accede a `http://localhost:3000` en tu navegador para probar la API localmente.

### Despliegue en AWS

1. Configura tus credenciales de AWS ejecutando `aws configure` y sigue las instrucciones.
2. Ejecuta el comando `serverless deploy` para desplegar el proyecto en tu cuenta de AWS.

### Acceso a la Documentación

Una vez que hayas desplegado el proyecto en AWS, puedes acceder a la documentación de la API generada automáticamente visitando la URL proporcionada por AWS API Gateway.

## Estructura del Proyecto

- `src/`: Contiene el código fuente del proyecto.
- `tests/`: Contiene las pruebas unitarias para las funciones.
- `serverless.yml`: Archivo de configuración de Serverless Framework.
- `README.md`: Este archivo que estás leyendo.

## Contribuciones

¡Las contribuciones son bienvenidas! Si encuentras algún error o tienes alguna sugerencia de mejora, no dudes en abrir un issue o enviar un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.
