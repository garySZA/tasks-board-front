# Taskboard App Frontend - React + TS

Aplicación tipo tablero para gestionar tareas de desarrollo para metodologías ágiles

## Variables de Entorno

| Variable       | Tipo de Valor                                         | Descripción                                                                                                                                                                                                                         |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `VITE_MODE`    | `string` ejem:`development, production, testing, etc` | Especifica el modo de ejecución en el que se utilizarán las variables de entorno. Por ejemplo, development para desarrollo o production para producción.                                                                            |
| `VITE_API_URL` | `string` ejem: `http://localhost:8083/api/v1`         | Debe contener la URL del servidor backend incluyendo el prefijo de la API. Por ejemplo, `http://localhost:8083/api/v1` para un servidor backend en ejecución en `localhost` en el puerto `8083` con el prefijo de la API `api/v1/`. |

## Ejecución Docker

Para poder ejecutar la aplicación se debe ejecutar el siguiente comando en una terminal de comandos:

```bash
  docker run -p 8090:80 -e VITE_API_URL=http://localhost:8083/api/v1 taskboard-app-front
```

## Ejecución de manera local

Clonar el proyecto

```bash
  git clone https://github.com/garySZA/tasks-board-front.git
```

Ingresar al directorio del proyecto

```bash
  cd tasks-board
```

Instalar dependencias

```bash
  yarn install
```

Crear archivo con variables de directorio

```bash
  copy .env.example .env.development
```

Reemplazar el valor de las variables de entorno que se encuentran en .env.development como se especifica en la sección de variables de entorno de este archivo

Ejecutar la aplicación en modo desarrollo

```bash
  yarn dev
```

> **NOTA:**
>
> Para ejecutar la aplicación se tienen diferentes modos (development, production, y testing). Para cada uno de ellos debe existir un archivo `.env` que contenga las variables específicas para cada modo.
>
> - `.env.development`
> - `.env.production`
> - `.env.testing`
>
> La ejecución se podrá realizar en los siguientes modos, considerando lo dicho anteriormente:
>
> ```bash
> yarn dev
> yarn prod
> ```
